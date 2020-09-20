import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ListUsersComponent } from './list-users/list-users.component';



@NgModule({
  declarations: [UpdateUsersComponent, AddUsersComponent, ListUsersComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
