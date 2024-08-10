import { Account } from '../account/account.model';
import { ClientDto } from './client.dto';

export class Client implements ClientDto {
  id?: string;
  name: string;
  address: string;
  account?: Account[];
  manager?: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
    this.account = [];
    this.manager = null;
  }
}
