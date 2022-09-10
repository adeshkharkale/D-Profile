import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mAdminHome } from './m-admin-home.model';

@Injectable({
  providedIn: 'root'
})
export class SAdminHomeService {

  pAdminHome:mAdminHome = new mAdminHome();

  constructor(private http:HttpClient) { }

  getAdminDashboard(){
    this.http.get(environment.apiKey + 'RegistrationInfos/GetCount')
    .toPromise()
    .then(
      (res:any) => {
        this.pAdminHome = Object.assign(res);

        this.http.get(environment.apiKey + 'RegistrationInfos/SendMail').subscribe(
          res=>{
            alert('ok')
          },
          err=>{
            alert('bad')
          }
        );
      },
      err => {
        alert('Failed')
      }
    );
  }
}
