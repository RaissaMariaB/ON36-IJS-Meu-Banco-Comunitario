import { Injectable } from '@nestjs/common';
import { Account } from './account.model';
import { AccountType } from './accounts.types';
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'src/client/client.model';


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
    client: Client,
    balance: number,
    createdAt: Date,
    accountType: AccountType,
  ): Account {
    const accounts = this.readAccounts();

    const newAccount = {
      accountId,
      client,
      balance,
      createdAt,
      accountType,
    };
    accounts.push(newAccount);
    this.writeAccouts(accounts);
    return newAccount;
  };


  findById(id: string): Account {
    const accounts = this.readAccounts();
    const account = accounts.find((account) => account.id === id);

    if (!account) {
      console.log(`Account with id ${id} not found`);
    }
    return account;
  }

  updateBalance(id: string, newBalance: number): Account {
    const accounts = this.readAccounts();
    const account = accounts.find((account) => account.id === id);
    account.balance = newBalance;

    this.writeAccouts(accounts);

    return account;
  }

  removeBalance(id: string): void {
    const accounts = this.readAccounts();
    const accountIndex = accounts.findIndex((account) => account.id === id);
    accounts.splice(accountIndex, 1);
    this.writeAccouts(accounts);
  }
}
