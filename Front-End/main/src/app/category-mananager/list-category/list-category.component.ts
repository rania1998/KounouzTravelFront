import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { Category } from '../../KounouzTravelModals/Category';
import { PageCategory } from '../../KounouzTravelModals/PageCategory';
import { CategoryService } from '../../KounouzTravelServices/CategoryService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  searchText: string;

  constructor( private categoryService: CategoryService,private router: Router) { }
  categorys: Category[];
  pageCategory: PageCategory ;
  selectedPage: Number = 0;
  getCategory(): void {
    this.categoryService.getAllCategorys()
        .subscribe(categorys => this.categorys = categorys);
  }

  getPageCategory(page: number): void {
    this.categoryService.getCategoryByPage(page)
        .subscribe(page => this.pageCategory = page)
  }

  onSelect(page: number): void {
    console.log("selected page : "+page);
    this.selectedPage=page;
    this.getPageCategory(page);
  }
  ngOnInit() {
     this.getPageCategory(0);
  }

  onUpdate(){

        let timerInterval;
        Swal.fire({
          title: 'affichage du détail Contrat!',
          html: 'Chargement ..<b></b> ',
          timer: 2000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => { }, 100);
          },
          onClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
          if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.timer

          ) {
            console.log('Category-detail and rendered to list-Category success'); // eslint-disable-line
            console.clear();
          }
        });

  }
  onSwalling(){
    let timerInterval;
        Swal.fire({
          title: 'affichage du détail Contrat!',
          html: 'Chargement ..<b></b> ',
          timer: 2000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => { }, 100);
          },
          onClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
          if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.timer

          ) {
            console.log('Category-detail and rendered to list-Category success'); // eslint-disable-line
            console.clear();
          }
        });


  }

  deleteCategory(category: Category){
    console.log("mmmmmmm"+category.id)

    this.categoryService.deleteCategory(category).subscribe( res => {

      this.categorys.splice(this.categorys.indexOf(category),1)
    }
    );
    console.log('token',  window.localStorage.getItem.toString)

  }
}
