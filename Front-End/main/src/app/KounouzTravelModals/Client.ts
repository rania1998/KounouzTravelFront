import { Users } from './Users';

export  class Client extends Users{
id: Number;
firstname: string;
lastname: string;
Adresse: string;
clientType: ClientType;

public getAllName = '/Client/ClientsManager';
public deleteName = '/Client/deleteClient';
public saveName = '/Client/saveClient';
public getByIdName = '/Client/ClientsById/';
}
