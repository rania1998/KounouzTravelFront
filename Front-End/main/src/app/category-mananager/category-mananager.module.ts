import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './filter.pipe';
import { FileUploader } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryMananagerRoutingModule } from './category-mananager-routing.module';
import { CategoryService } from '../KounouzTravelServices/CategoryService';
import { ListCategoryComponent } from './list-category/list-category.component';






@NgModule({
  declarations: [ListCategoryComponent, AddCategoryComponent, UpdateCategoryComponent, FilterPipe],
  imports: [
    HttpClientModule,
    CommonModule,
    CategoryMananagerRoutingModule,
    NgbModule,
    NgbDatepickerModule,
    FormsModule,
  ],


  providers: [
    CategoryService,
    FormBuilder,
    ReactiveFormsModule,
  ]


})
export class CategoryMananagerModule { }


