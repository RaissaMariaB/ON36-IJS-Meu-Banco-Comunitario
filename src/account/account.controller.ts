import { Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountType } from './account.model';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post() addAccount(
    accountId: number,
    clientId: number,
    balance: number,
    createdAt: Date,
    accountType: AccountType,
  ) {
    return this.accountService.createAccount(
      accountId,
      clientId,
      balance,
      createdAt,
      accountType,
    );
  }
}
