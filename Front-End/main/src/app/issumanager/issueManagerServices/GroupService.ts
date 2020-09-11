import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Group } from '../issueManagerModels/Group';




@Injectable()
export class GroupService {

    private groupUrl = 'http://localhost:8080//group/';

    constructor(private http: HttpClient) { }

    public getAllGroups() {
        return this.http.get<Group[]>(this.groupUrl + "groupManager")
    }

    public deleteGroupe(groupe){
        console.log(groupe)
        return this.http.post<Group>(this.groupUrl +"/deleteGroup", groupe)
          }

}