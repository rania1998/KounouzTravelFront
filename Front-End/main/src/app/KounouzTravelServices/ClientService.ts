import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import { Client } from '../KounouzTravelModals/Client';

@Injectable()
export class ClientService extends BasicService<Client>{
  public getAllName = '/Client/ClientsManager';
  public deleteName = '/Client/deleteClient';
  public saveName = '/Client/saveClient';
  public getByIdName = '/Client/ClientsById/';

}
