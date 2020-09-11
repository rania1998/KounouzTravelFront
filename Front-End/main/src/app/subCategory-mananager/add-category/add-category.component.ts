import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { CategoryService } from '../../KounouzTravelServices/CategoryService';




@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})


export class AddCategoryComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService) { }


  ngOnInit() {

  }

  save() {
  }



}

