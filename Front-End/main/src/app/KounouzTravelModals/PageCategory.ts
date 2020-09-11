import { OnInit } from '@angular/core';
import { Category } from './Category';


export class PageCategory {
    content: Category[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number ;
    first: boolean ;
    sort: string ;
    numberOfElements: number ;

}
