import { Account } from '../account/account.model';

export class Client {
  constructor(
    public id: number,
    public name: string,
    public account: Account[] = [],
    public address: string,
  ) {}

  get clientAddress() {
    return this.address;
  }

  get clientName() {
    return this.name;
  }

  get clientAccounts() {
    return this.account;
  }

  get clientNumberID() {
    return this.id;
  }

  set newName(value: string) {
    this.name = value;
  }

  set newAddress(value: string) {
    this.address = value;
  }

  addAccount(account: Account) {
    this.account.push(account);
  }
}
