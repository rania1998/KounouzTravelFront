import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import { Category } from '../KounouzTravelModals/Category';

@Injectable()
export class CategoryService extends BasicService<Category>{
  public getAllName = '/Category/CategoryManager';
  public deleteName = '/Category/deleteCategory';
  public saveName = '/Category/saveCategory';
  public getByIdName = '/Category/CategoryById/';

}
