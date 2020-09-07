import { HttpClient , HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BasicService<T> {

  private BasicUrl = 'http://localhost:4444/';
  //  private ClientUrlPage = 'http://localhost:8080/client/get?page=';
  public getAllName = '/Users/UsersManager';
  public deleteName = '/Users/deleteUsers';
  public saveName = '/Users/saveUsers';
  public getByIdName = '/Users/clientById/';
  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<T[]>(this.BasicUrl + this.getAllName,{headers : {
      'Content-Type': 'application/json',
  }});
  }

  public delete(t: T) {
    // console.log(Client);
    return this.http.post<T>(this.BasicUrl + this.deleteName, t,{headers : {
      'Content-Type': 'application/json',
  }}).subscribe();
  }

  public add(t: T) {
    return this.http.post<T>(this.BasicUrl + this.saveName, t).subscribe();
  }

  public getById(id) {
    return this.http.get<T>(this.BasicUrl + this.getByIdName + id, {headers : {
      'Content-Type': 'application/json',
  }});
  }

  update(t: T) {
    return this.http.post<T>(this.BasicUrl + this.saveName, t,{headers : {
      'Content-Type': 'application/json',
  }}).subscribe();
  }
}
