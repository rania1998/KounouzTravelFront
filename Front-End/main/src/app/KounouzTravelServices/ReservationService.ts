import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import {Reservation } from '../KounouzTravelModals/Reservation';

@Injectable()
export class ReservationService extends BasicService<Reservation>{
  public getAllName = '/Reservation/ReservationManager';
  public deleteName = '/Reservation/deleteReservation';
  public saveName = '/Reservation/saveReservation';
  public getByIdName = '/Reservation/ReservationById/';

}