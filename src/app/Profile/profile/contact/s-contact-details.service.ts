import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mContactDetail } from './m-contact-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SContactDetailsService {

  pContactDetail:mContactDetail = new mContactDetail();

  arrContactDetail:mContactDetail[];

  constructor(private http:HttpClient) { }

  saveRecievedInquiry(){
    return this.http.post(environment.apiKey + 'dtl_ContactDetail', this.pContactDetail);
  }
}
