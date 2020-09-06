import { Component, ViewChild } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { UserService } from '../KounouzTravelServices/UserService';
import { Users } from '../KounouzTravelModals/Users';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-user.component.html',
  styleUrls: ['./smart-user.component.scss'],
})
export class SmartUserComponent {

  @ViewChild('table')
  smartTable: Ng2SmartTableComponent;

  settings = {
    mode: 'inline',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate : true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave : true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      login: {
        title: 'login',
        type: 'string',
      },
      password: {
        title: 'password',
        type: 'string',
      },
      email: {
        title: 'email',
        type: 'string',
      },
      Role: {
        title: 'Role',
        type: 'string',
      //   type: 'html',
      //   editor: {
      //     type: 'list',
      //     config: {
      //       list: [{ value: 'User', title: 'User' },
			// { value: 'Client', title: 'Client' },
			// { value: 'Agent', title: 'Agent' },
			// { value: 'Supervisor', title: 'Supervisor' }],
      //     },
      //   },
      },

    },

  };
  contractt: Users = new Users();
  source:Users[];
  constructor( private clientService: UserService ) {
    const data = this.clientService.getAllClients();
    // this.smartTable.create.subscribe( (dataObject: any) => {
    //   console.log('Create');
    //   console.log(dataObject);
    // });
   // this.source.load(data);
   this.getClient();
   }

   saveUser($event):void{
    console.log($event);
    this.clientService.addClient($event.newData as Users);
    this.getClient();
    $event.confirm.resolve();
   }
   updateUser($event):void{
    console.log($event);
    this.clientService.updateClient($event.newData as Users);
    $event.confirm.resolve();
   }
   getClient(): void {
    this.clientService.getAllClients().subscribe(Users =>{
      this.source = Users;
      console.clear;
      // console.log(Users);
    } );
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
       //console.log(event);
      this.clientService.deleteClient(event.data as Users);
      event.confirm.resolve();
    } else {
      // console.log('hello');
      event.confirm.reject();
    }
  }

}
