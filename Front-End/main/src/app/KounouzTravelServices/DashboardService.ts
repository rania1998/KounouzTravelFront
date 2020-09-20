import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import {Dashboard } from '../KounouzTravelModals/Dashboard';

@Injectable()
export class DashboardService extends BasicService<Dashboard>{
  public getAllName = '/Dashboard/DashboardManager';
  public deleteName = '/Dashboard/deleteDashboard';
  public saveName = '/Dashboard/saveDashboard';
  public getByIdName = '/Dashboard/DashboardById/';

}
