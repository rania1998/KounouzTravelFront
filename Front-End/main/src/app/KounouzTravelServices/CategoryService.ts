import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Category } from '../KounouzTravelModals/Category';
import { PageCategory } from '../KounouzTravelModals/PageCategory';




@Injectable()
export class CategoryService {

    private CategoryUrl = 'http://localhost:4444/Category/';
    private CategoryUrlPage = 'http://localhost:4444/Category/get?page=';

    constructor(private http: HttpClient) { }

    public getAllCategorys() {
        return this.http.get<Category[]>(this.CategoryUrl + "categoryManager")
    }

    public deleteCategory(category){
        return this.http.post<Category>(this.CategoryUrl +"deleteCategory", category)
          }

          public addCategory(Category){
            console.log(Category)
            return this.http.post<Category>(this.CategoryUrl +"saveCategory", Category)
              }


    public  getCategoryByPage(page:number): Observable<PageCategory> {
            var url = this.CategoryUrlPage;
            url = url + page + "&size=20";
            return this.http.get<PageCategory>(url)
            .pipe(
              map(response => {
                const data = response;
                return data ;
              }));
          }
          public getCategoryById(id){
            return this.http.get<Category>(this.CategoryUrl +"CategoryById/"+id);
              }

              updateCategory(Category: Category) {
                return this.http.post<Category>(this.CategoryUrl +"CategoryById/", Category);
              }
}

