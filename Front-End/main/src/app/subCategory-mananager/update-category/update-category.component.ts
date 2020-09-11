import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { CategoryService } from '../../KounouzTravelServices/CategoryService';



@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})


export class UpdateCategoryComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService) { }


  ngOnInit() {

  }

  save() {
  }



}

