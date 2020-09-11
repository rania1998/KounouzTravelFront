import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractMananagerRoutingModule } from './contract-mananager-routing.module';
import { ListContractComponent } from './list-contract/list-contract.component';


@NgModule({
  declarations: [ListContractComponent],
  imports: [
    CommonModule,
    ContractMananagerRoutingModule
  ],


  providers: [
   
  ]


})
export class ContractMananagerModule { }


