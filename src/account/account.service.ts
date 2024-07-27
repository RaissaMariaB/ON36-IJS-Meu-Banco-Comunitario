import { Injectable } from '@nestjs/common';
import { Account, AccountType } from './account.model';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class AccountService {
  private readonly filePath = path.resolve('src/accounts/accounts.json');
  private idCounter = 1;
  private accounts: Account[] = [];

  private readAccounts(): Account[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Account[];
  }

  private writeAccouts(accounts: Account[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
  }

  createAccount(
    accountId: number,
    clientId: number,
    balance: number,
    createdAt: Date,
    accountType: AccountType,
  ): Account {
    const accounts = this.readAccounts();

    const newAccount = {
      accountId,
      clientId,
      balance,
      createdAt,
      accountType,
      accountNumber:
        accounts.length > 0 ? accounts[accounts.length - 1].accountId + 1 : 1,
    };
    accounts.push(newAccount);
    this.writeAccouts(accounts);
    return newAccount;
  }

  findById(id: number): Account {
    const accounts = this.readAccounts();
    const account = accounts.find(
      (account) => account.accountId === Number(id),
    );

    if (!account) {
      console.log(`Account with id ${id} not found`);
    }
    return account;
  }

  updateBalance(id: number, newBalance: number): Account {
    const accounts = this.readAccounts();
    const account = accounts.find(
      (account) => account.accountId === Number(id),
    );
    account.balance = newBalance;

    this.writeAccouts(accounts);

    return account;
  }

  removeBalance(id: number): void {
    const accounts = this.readAccounts();
    const accountIndex = accounts.findIndex(
      (account) => account.accountId === Number(id),
    );
    accounts.splice(accountIndex, 1);
    this.writeAccouts(accounts);
  }
}
