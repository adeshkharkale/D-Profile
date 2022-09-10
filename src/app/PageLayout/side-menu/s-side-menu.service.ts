import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mSideMenu } from './m-side-menu.model';

@Injectable({
  providedIn: 'root'
})
export class SSideMenuService {

  pSideMenu:mSideMenu = new mSideMenu();

  arrSideMenu:mSideMenu[];

  constructor(private http : HttpClient) { }

  getSideMenu(){
    var userRoleId:any = localStorage.getItem('userRoleId')
    this.http.get(`${environment.apiKey + 'mstMenus/GetAllMenu'}/${userRoleId}`)
    .toPromise()
    .then(res => {
      this.arrSideMenu = res as mSideMenu[];
    },
    err => {
      alert('Something went wrong !')
    });
  }
}
