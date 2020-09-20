import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OfferService } from 'src/app/KounouzTravelServices/OfferService';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private offerService: OfferService)
  ) { }

  ngOnInit() {
  }

}
