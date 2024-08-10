import { Injectable } from '@nestjs/common';
import { Client } from './client.model';
import { ClientRepository } from './client.repository';
import { ClientDto } from './client.dto';
import { uuid } from 'uuidv4';

@Injectable()
export class ClientService {
  public clients: Client[] = [];
  constructor(private clientRepository: ClientRepository) {}

  createClient(client: ClientDto): Client {
    const { name, address } = client;
    const UUID = uuid();
    return this.clientRepository.createClient({
      id: UUID,
      name,
      address,
    });
  }

  getClientById(clientId: string): Client | null {
    return this.clientRepository.getClientById(clientId);
  }

  removeClient(clientId: string): void {
    this.clientRepository.removeClient(clientId);
  }

  getAllClients(): Client[] {
    return this.clientRepository.getAllClients();
  }
}
