import { Account } from "./Account";
import { Client } from "./Client";

export class CurrentAccount extends Account {
    private limit: number;
  
    constructor( initialBalance: number, limit: number, balance: number, createAt: Date, clientId: Client ) {
      super(clientId, initialBalance, balance, createAt);
      this.limit = limit;
    };
  
    override withdraw(value: number) {
      if (value <= this.balanceAccount + this.limit) {
        this.balanceAccount -= value;
      } else {
        throw new Error("Limite de saque excedido.");
      }
    }
  
    override transfer(value: number, destinyAccount: Account) {
      this.withdraw(value);
      destinyAccount.deposit(value);
    }
  }