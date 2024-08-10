import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.model';
import { ClientDto } from './client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('/create')
  createClient(@Body() createClientDto: ClientDto): Client {
    const client: Client = { ...createClientDto };
    return this.clientService.createClient(client);
  }

  @Get()
  getAllClients(): Client[] {
    return this.clientService.getAllClients();
  }

  @Get()
  getClientById(id: string): Client {
    return this.clientService.getClientById(id);
  }
}
