import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transactions, TransactionsType } from './transactions.model';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  createTransactions(
    @Body('accountId') accountId: number,
    @Body('amount') amount: number,
    @Body('type') type: TransactionsType,
  ): Transactions {
    return this.transactionsService.createTransaction(accountId, amount, type);
  }

  @Get()
  findAll(): Transactions[] {
    return this.transactionsService.findAll();
  }
}
