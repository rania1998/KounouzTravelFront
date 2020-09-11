

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ListContractComponent } from './list-contract/list-contract.component';


    export const ContractManager_route: Routes = [
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
            path: 'list-contract',
            component: ListContractComponent,
            data: {
                title: 'list contract',
                urls: [
                    { title: 'list contract', url: 'contract' },
                    { title: '' }
                ]
            }
        },
    

    ]
    }
    
];
    @NgModule({
        imports: [ RouterModule.forChild(ContractManager_route) ],
        exports: [ RouterModule ]
    })
    export class ContractMananagerRoutingModule {
    
    }