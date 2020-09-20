import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import {Offer } from '../KounouzTravelModals/Offer';

@Injectable()
export class OfferService extends BasicService<Offer>{
  public getAllName = '/Offer/OfferManager';
  public deleteName = '/Offer/deleteOffer';
  public saveName = '/Offer/saveOffer';
  public getByIdName = '/Offer/OfferById/';

}