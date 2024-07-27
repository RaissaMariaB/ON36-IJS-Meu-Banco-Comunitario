import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountType } from 'src/account/account.model';
import { Client } from 'src/client/client.model';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerController: ManagerController) {}

  @Post('addCliente')
  addNewClient(@Body() client: Client) {
    return this.managerController.addNewClient(client);
  }

  @Post('openAccount')
  openAccount(
    @Body('clientId') clientId: number,
    @Body('accountType') accountType: AccountType,
  ) {
    return this.managerController.openAccount(clientId, accountType);
  }

  @Get('clients')
  getClients() {
    return this.managerController.getClients();
  }

  @Get('accounts')
  getAccounts() {
    return this.managerController.getAccounts();
  }
}
