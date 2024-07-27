import { Account } from "./Account";
import { Client } from "./Client";

export class SavingsAccount extends Account {

    constructor( initialBalance: number, balance: number, createAt: Date, clientId: Client ) {
      super(clientId, initialBalance, balance, createAt);
    };
    
    override withdraw(value: number) {
        if (value <= this.balanceAccount ) {
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