import { Client } from 'src/client/client.model';
import { AccountType } from './accounts.types';

export class Account {
  accountId: string;
  accountType: AccountType;
  createdAt: Date;
  balance: number;
  client: Client;
  limit?: number;

  constructor(accountType, balance, createdAt, client, limit?) {
    this.accountId = uuid();
    this.accountType = accountType;
    this.balance = balance;
    this.createdAt = createdAt;
    this.client = client;
    this.limit = limit;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(value: number): void {
    this.balance += value;
  }

  withdraw(value: number): void {
    if (value <= this.balance) {
      this.balance -= value;
      return;
    }

    throw new Error('Saldo insuficiente');
  }
}
