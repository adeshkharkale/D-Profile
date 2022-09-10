import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mActiveUsers } from './m-active-users.model';

@Injectable({
  providedIn: 'root'
})
export class SActiveUsersService {

  pActiveUsers:mActiveUsers = new mActiveUsers();

  arrActiveUsers:mActiveUsers[];
  arrRegisteredUsers:mActiveUsers[];

  constructor(private http:HttpClient) { }

  getActiveUsers(){
    this.http.get(environment.apiKey + 'RegistrationInfos/GetActiveUsers')
    .toPromise()
    .then(
      (res:any) => {
        this.arrActiveUsers = res as mActiveUsers[];
        let date:any;
        this.arrActiveUsers.forEach(element => {
          date = element.submitDate;
          element.submitDate = new Date(date.toString().split('T')[0]);
        });
      },
      err => {
        alert('Failed');
      }
    );
  }

  getRegisteredUsers(){
    this.http.get(environment.apiKey + 'RegistrationInfos/GetRegisteredUsers')
    .toPromise()
    .then(
      (res:any) => {
        this.arrRegisteredUsers = res as mActiveUsers[];
        let date:any;
        this.arrRegisteredUsers.forEach(element => {
          date = element.submitDate;
          element.submitDate = new Date(date.toString().split('T')[0]);
        });
      },
      err => {
        alert('Failed');
      }
    );
  }
}
