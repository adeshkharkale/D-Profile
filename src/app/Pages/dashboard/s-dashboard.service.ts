import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SDashboardService {
  
  constructor(private http:HttpClient) { }

  getData(){
    let referal_code:any = localStorage.getItem('referal_code');
    let referalCode:string = referal_code.toString().split('"')[1];
    return this.http.get(environment.apiKey + 'RegistrationInfos/GetDashboard?referalCode=' + referalCode);
  }
}
