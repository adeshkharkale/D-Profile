import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mPaymentDetails } from './m-payment-details.model';

@Injectable({
  providedIn: 'root'
})
export class SPaymentDetailsService {

  arrPaymentDetails:mPaymentDetails[];

  constructor(private http:HttpClient) { }

  getSubscriberPayments(){
    this.http.get(environment.apiKey + 'dtlSubscriberPayments/GetSubscriberPayments')
    .toPromise()
    .then(
      (res:any) => {
        this.arrPaymentDetails = res as mPaymentDetails[];
      },
      err => {
        alert('Something went wrong.!');
      }
    );
  }
}
