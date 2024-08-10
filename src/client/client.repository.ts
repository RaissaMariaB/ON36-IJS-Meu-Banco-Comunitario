import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { Client } from './client.model';

@Injectable()
export class ClientRepository {
  private clients: Client[] = [];

  constructor() {}

  getAllClients(): Client[] {
    return this.clients;
  }

  getClientById(clientId: string): Client | null {
    const client = this.clients.find((client) => client.id === clientId);
    return client;
  }

  createClient(client: Client): Client {
    client.id = uuid();
    this.clients.push(client);
    return client;
  }

  removeClient(clientId: string): void {
    this.clients = this.clients.filter((client) => client.id !== clientId);
  }
}
