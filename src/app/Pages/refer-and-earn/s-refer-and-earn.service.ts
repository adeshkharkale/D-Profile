import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mUserData } from 'src/app/Login/m-user-data.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SReferAndEarnService {

  arrReferals:mUserData[];

  constructor(private http:HttpClient) { }

  getRefrals(){
    let referal_code:any = localStorage.getItem('referal_code');
    let referalCode:string = referal_code.toString().split('"')[1]; 
    this.http.get(environment.apiKey + 'RegistrationInfos/GetReferals/' + referalCode)
    .toPromise()
    .then(res => this.arrReferals = res as mUserData[]);
  }

}
