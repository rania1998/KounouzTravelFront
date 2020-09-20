import { HttpClient , HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import { Users } from '../KounouzTravelModals/Users';

@Injectable()
export class UserService extends BasicService<Users>{
  public getAllName = '/Users/UsersManager';
  public deleteName = '/Users/deleteUsers';
  public saveName = '/Users/saveUsers';
  public getByIdName = '/Users/UsersById/';

}
