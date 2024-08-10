import { Injectable, NotFoundException } from '@nestjs/common';
import { Transactions, TransactionsType } from './transactions.model';
import { AccountService } from '../account/account.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TransactionsService {
  private readonly filePath = path.resolve(
    'src/transactions/transactions.json',
  );
  private idCounter: number;

  constructor(private readonly accountsService: AccountService) {
    const transactions = this.readTransactions();
    this.idCounter =
      transactions.length > 0
        ? transactions[transactions.length - 1].id + 1
        : 1;
  }

  private readTransactions(): Transactions[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Transactions[];
  }

  private writeTransactions(transactions: Transactions[]): void {
    fs.writeFileSync(
      this.filePath,
      JSON.stringify(transactions, null, 2),
      'utf8',
    );
  }

  createTransaction(
    accountId: number,
    amount: number,
    type: TransactionsType,
  ): Transactions {
    const account = this.accountsService.findById(accountId);
    if (!account) {
      throw new NotFoundException('Account not found');
    }

    const newTransaction = new Transactions(
      accountId,
      amount,
      type,
      new Date(),
    );
    const transactions = this.readTransactions();
    transactions.push(newTransaction);
    this.writeTransactions(transactions);

    if (type === TransactionsType.DEPOSIT) {
      account.balance -= amount;
    } else {
      account.balance += amount;
    }
    this.accountsService.updateBalance(accountId, account.balance);

    return newTransaction;
  }

  findAll(): Transactions[] {
    return this.readTransactions();
  }
}
