import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupComponent } from './list-group/list-group.component';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupManagerRoutingModule } from './group-manager-routing.module';
import { ViewGroupComponent } from './view-group/view-group.component';
import { GroupService } from '../issueManagerServices/GroupService';


@NgModule({
  imports: [ 
    CommonModule,
    GroupManagerRoutingModule,
   // RouterModule.forChild(GroupManagerRoutingModule),
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  declarations: [

ListGroupComponent,
ViewGroupComponent,

  ],

  providers: [
    GroupService
  ]



})

export class GroupManagerModule { }
