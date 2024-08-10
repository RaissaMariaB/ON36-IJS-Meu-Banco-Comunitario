import { Injectable } from '@nestjs/common';
import { AccountType } from './accounts.types';
import { Client } from '../client/client.model';
import { Account } from './account.model';

@Injectable()
export class AccountFactory {
  createAccount(
    type: AccountType,
    client: Client,
  ): AccountType.CHECKING_ACCOUNT | AccountType.SAVING_ACCOUNT {
    switch (type) {
      case AccountType.CHECKING_ACCOUNT:
        const newAccount = {
          balance: 0,
          limit: 200,
          client: Client,
          typeAccount: AccountType.CHECKING_ACCOUNT,
        };
        const checkingAccount = new Account(newAccount);
        return checkingAccount;

      case AccountType.Savings:
        const savingsAccount = new SavingsAccount();
        savingsAccount.balance = 0;
        savingsAccount.taxRate = 0.02;
        savingsAccount.client = client;
        savingsAccount.typeAccount = AccountType.Savings;
        return savingsAccount;

      default:
        throw new Error('Invalid account type');
    }
  }
}
