
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import {ProcessInstance } from '../KounouzTravelModals/ProcessInstance';

@Injectable()
export class ProcessInstanceService extends BasicService<ProcessInstance>{
  public getAllName = '/ProcessInstance/ProcessInstanceManager';
  public deleteName = '/ProcessInstance/deleteProcessInstance';
  public saveName = '/ProcessInstance/saveProcessInstance';
  public getByIdName = '/ProcessInstance/ProcessInstanceById/';

}