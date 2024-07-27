export enum AccountType {
  SAVING_ACCOUNT = 'SAVING_ACCOUNT',
  CURRENT_CURRENT = 'CURRENT_CURRENT',
}

export class Account {
  constructor(
    public accountId: number,
    public balance: number,
    public createdAt: Date,
    public clientId: number,
    public accountType: AccountType,
  ) {}
}
