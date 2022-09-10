import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mContactDetail } from 'src/app/Profile/profile/contact/m-contact-detail.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SReceivedInquiryService {

  pContactDetail:mContactDetail = new mContactDetail();

  arrContactDetail:mContactDetail[];

  constructor(private http:HttpClient) { }

  getReceivedInquiry(regId:number){
    this.http.get(environment.apiKey + 'dtl_ContactDetail/' + regId)
    .toPromise()
    .then(res => this.arrContactDetail = res as mContactDetail[]);
  }
}
