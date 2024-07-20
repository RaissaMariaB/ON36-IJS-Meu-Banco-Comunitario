import { Client } from "./Client";

export abstract class Account {
    private balance: number;
    private createAt: Date;
    private accountNumber: number;

    constructor(public clientId: Client, initialBalance: number, accountNumber: number, createAt: Date ) {
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
        this.createAt = createAt;
    };

    get balanceAccount(): number {
        return this.balance;
    };

    get createAtAccount(): Date {
        return this.createAt;
    };

    get accountNumberAccount(): number {
        return this.accountNumber;
    };

    set balanceAccount(value: number) {
         this.balance = value;
    };

    deposit(value: number) {
        this.balance += value;
    };
  
    
    abstract withdraw (value: number): void;
    abstract transfer (value: number, destinyAccount: Account): void;    
};