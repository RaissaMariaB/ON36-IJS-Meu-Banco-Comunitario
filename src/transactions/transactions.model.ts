export enum TransactionsType {
  TRANSFER = 'TRANSFER',
  DEPOSIT = 'DEPOSIT',
}

export class Transactions {
  constructor(
    public id: number,
    public accountId: number,
    public amount: number,
    public transactionType: TransactionsType,
    public date: Date,
  ) {}
}
