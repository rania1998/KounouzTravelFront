import { Users } from '../KounouzTravelModals/Users';
import { HttpClient , HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private ClientUrl = 'http://localhost:4444//Users/';
  //  private ClientUrlPage = 'http://localhost:8080/client/get?page=';

  constructor(private http: HttpClient) { }

  public getAllClients() {
    return this.http.get<Users[]>(this.ClientUrl + 'UsersManager');
  }

  public deleteClient(Client) {
    // console.log(Client);
    return this.http.post<Users>(this.ClientUrl + 'deleteClient', Client);
  }

  public addClient(Client: Users) {
    // console.log(Client);
    return this.http.post<Users>(this.ClientUrl + 'saveUsers', Client,{headers : {
      'Content-Type': 'application/json',
  }});
  }


  // public  getClientByPage(page:number): Observable<PageClient> {
  //         var url = this.ClientUrlPage;
  //         url = url + page + '&size=20';
  //         return this.http.get<PageClient>(url)
  //         .pipe(
  //           map(response => {
  //             const data = response;
  //             return data ;
  //           }));
  //       }
  public getClientById(id) {
    return this.http.get<Users>(this.ClientUrl + 'clientById/' + id);
  }

  updateClient(client: Users) {
    return this.http.post<Users>(this.ClientUrl + 'clientById/', client);
  }


}
