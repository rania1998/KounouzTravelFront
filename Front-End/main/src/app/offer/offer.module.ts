import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';



@NgModule({
  declarations: [AddOfferComponent, ListOfferComponent, UpdateOfferComponent],
  imports: [
    CommonModule
  ]
})
export class OfferModule { }
