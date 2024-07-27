import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientService } from './client/client.service';
import { ClientController } from './client/client.controller';
import { ClientModule } from './client/client.module';
import { AccountService } from './account/account.service';
import { ManagerModule } from './manager/manager.module';
import { ManagerService } from './manager/manager.service';
import { ManagerController } from './manager/manager.controller';
import { TransactionsModule } from './transactions/transactions.module';
import { AccountModule } from './account/account.module';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';

@Module({
  imports: [ClientModule, AccountModule, TransactionsModule, ManagerModule],
  controllers: [AppController, ClientController, AccountController, ManagerController],
  providers: [AppService, ClientService, AccountService, ManagerService],
})
export class AppModule {}
