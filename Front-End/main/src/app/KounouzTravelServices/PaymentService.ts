import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import { Payment } from '../KounouzTravelModals/Payment';

@Injectable()
export class PaymentService extends BasicService<Payment>{
  public getAllName = '/Payment/PaymentManager';
  public deleteName = '/Payment/deletePayment';
  public saveName = '/Payment/savePayment';
  public getByIdName = '/Payment/PaymentById/';

}