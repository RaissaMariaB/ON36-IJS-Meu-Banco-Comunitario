import { Account } from "./Account"

export class Client {
    private clientId;
    private address;
    private account: Account[] = []
    private name;


    constructor( name: string, clientId: number, address: string) {
      this.name = name;
      this.address = address;
      this.clientId = clientId;
    }
  
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
      return this.clientId;
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
