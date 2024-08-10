import { TransactionsType } from './transactions.type';

export class Transactions {
  constructor(
    public accountId: number,
    public amount: number,
    public transactionType: TransactionsType,
    public date: Date,
  ) {}
}
