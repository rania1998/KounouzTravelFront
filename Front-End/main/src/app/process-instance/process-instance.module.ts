import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProcessInstanceComponent } from './list-process-instance/list-process-instance.component';
import { AddProcessInstanceComponent } from './add-process-instance/add-process-instance.component';
import { UpdateProcessInstanceComponent } from './update-process-instance/update-process-instance.component';



@NgModule({
  declarations: [ListProcessInstanceComponent, AddProcessInstanceComponent, UpdateProcessInstanceComponent],
  imports: [
    CommonModule
  ]
})
export class ProcessInstanceModule { }
