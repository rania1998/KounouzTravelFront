import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OfferService } from '../../KounouzTravelServices/OfferService';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private OfferService: OfferService 
  ) { }

  ngOnInit() {
  }

}
