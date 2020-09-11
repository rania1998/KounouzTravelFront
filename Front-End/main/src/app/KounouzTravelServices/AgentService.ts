import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import { Agents } from '../KounouzTravelModals/Agents';

@Injectable()
export class AgentService extends BasicService<Agents>{
  public getAllName = '/Agents/AgentsManager';
  public deleteName = '/Agents/deleteAgents';
  public saveName = '/Agent/saveAgent';
  public getByIdName = '/Agents/AgentsById/';

}
