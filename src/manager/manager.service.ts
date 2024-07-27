import { Injectable } from '@nestjs/common';
import { Account, AccountType } from 'src/account/account.model';
import { Client } from 'src/client/client.model';

@Injectable()
export class ManagerService {
  private clients: Client[] = [];
  private accounts: Account[] = [];

  addClient(client: Client): Client {
    this.clients.push(client);
    return client;
  }

  openAccount(clientId: number, accountType: AccountType): Account {
    const newAccount = new Account(
      this.accounts.length + 1,
      0,
      new Date(),
      clientId,
      accountType,
    );
    this.accounts.push(newAccount);
    return newAccount;
  }

  getClients() {
    return this.clients.map((clients) => ({
      ...clients,
      contas: this.accounts.filter(
        (accouts) => accouts.accountId === clients.id,
      ),
    }));
  }

  getAccouts(): Account[] {
    return this.accounts;
  }
}
