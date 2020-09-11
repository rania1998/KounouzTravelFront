

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';


    export const CategoryManager_route: Routes = [
      {
        path: '',
        children: [
            {
                path: 'dashasso',
                data: {
                    title: '',
                    urls: [
                        { title: '', url: '' },
                        { title: 'group  Dashboard' }
                    ]
                }
            },

        {
            path: 'list-category',
            component: ListCategoryComponent,
            data: {
                title: 'list category',
                urls: [
                    { title: 'list category', url: 'category' },
                    { title: '' }
                ]
            }
        },
        {
          path: 'add-category',
          component: AddCategoryComponent,
          data: {
              title: 'add category',
              urls: [
                  { title: 'add category', url: 'category' },
                  { title: '' }
              ]
          }
      },
      {
        path: 'update-category/:id',
        component: UpdateCategoryComponent,
        data: {
            title: 'update category',
            urls: [
                { title: 'update category', url: 'category' },
                { title: '' }
            ]
        }
    },


    ]
    }

];
    @NgModule({
        imports: [ RouterModule.forChild(CategoryManager_route) ],
        exports: [ RouterModule ]
    })
    export class CategoryMananagerRoutingModule {

    }
