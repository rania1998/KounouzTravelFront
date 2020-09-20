import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import {WorkflowConfig } from '../KounouzTravelModals/WorkflowConfig';

@Injectable()
export class WorkflowConfigService extends BasicService<WorkflowConfig>{
  public getAllName = '/WorkflowConfig/WorkflowConfigManager';
  public deleteName = '/WorkflowConfig/deleteWorkflowConfig';
  public saveName = '/WorkflowConfig/saveWorkflowConfig';
  public getByIdName = '/WorkflowConfig/WorkflowConfigById/';

}