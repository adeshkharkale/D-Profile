import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { mUserData } from './m-user-data.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SUserDataService {

  pUserData: mUserData= new mUserData();

  constructor(private http:HttpClient) { }

  userLogin(){
    return this.http.post(environment.apiKey + 'RegistrationInfos/Login',this.pUserData);
  }

  changePassword(regId:number,password:string){
    this.pUserData.password = password;
    alert(JSON.stringify(this.pUserData));
    return this.http.post(environment.apiKey + 'RegistrationInfos/ChangePassword?regId=' + regId, this.pUserData);
  }
}
