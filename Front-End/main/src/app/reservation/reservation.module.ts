import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';



@NgModule({
  declarations: [UpdateReservationComponent, AddReservationComponent, ListReservationComponent],
  imports: [
    CommonModule
  ]
})
export class ReservationModule { }
