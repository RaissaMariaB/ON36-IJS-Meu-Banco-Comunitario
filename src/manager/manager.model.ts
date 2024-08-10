import { Client } from 'src/client/client.model';

export class Manager {
  id: string;
  name: string;
  clients: Client[];

  constructor(name: string) {
    this.name = name;
    this.clients = [];
  }
}
