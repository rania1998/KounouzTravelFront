
import { Routes, RouterModule } from '@angular/router';
import { ListGroupComponent } from './list-group/list-group.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { NgModule } from "@angular/core";


    export const GroupManager_route: Routes = [
      {
        path: '',
        children: [
            {
                path: 'dashasso',
                data: {
                    title: '',
                    urls: [
                        { title: '', url: '' },
                        { title: 'group  Dashboard' }
                    ]
                }
            },          
            {
            path: 'view',
            component: ViewGroupComponent,
            data: {
                title: 'Nouvelle group',
                urls: [
                    { title: 'Dashboard Association', url: 'association' },
                    { title: '' }
                ]
            }
        },
        {
            path: 'list-group',
            component: ListGroupComponent,
            data: {
                title: 'list group',
                urls: [
                    { title: 'list group', url: 'group' },
                    { title: '' }
                ]
            }
        },
    

    ]
    }
    
];
    @NgModule({
        imports: [ RouterModule.forChild(GroupManager_route) ],
        exports: [ RouterModule ]
    })
    export class GroupManagerRoutingModule {
    
    }