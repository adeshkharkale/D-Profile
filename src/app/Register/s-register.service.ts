import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { mUserData } from '../Login/m-user-data.model';
import { mDtlSubscriberPayment, mPaymentHistory, mSubscriptionPackage } from './m-subscription-package.model';

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class SRegisterService {

  pUserData: mUserData= new mUserData();
  pSubscriptionPackage:mSubscriptionPackage = new mSubscriptionPackage();
  pDtlSubscriberPayment:mDtlSubscriberPayment = new mDtlSubscriberPayment();
  pPaymentHistory:mPaymentHistory = new mPaymentHistory();

  arrSubscriptionPackage:mSubscriptionPackage[];

  constructor(private http:HttpClient,private route:Router) { }

  get nativeWindow() : any {
    return _window();
  }

  registerUser(){
  return this.http.post(environment.apiKey + 'RegistrationInfos/Register',this.pUserData);  
  }

  getSubscriptionPackages(){
    this.http.get(environment.apiKey + 'dtlSubscriptions')
    .toPromise()
    .then(res => {
      this.arrSubscriptionPackage = res as mSubscriptionPackage[];
      // alert(JSON.stringify(this.arrSubscriptionPackage));
    });
  }

  getReceiptByRegId(){
    let rId:any = localStorage.getItem('regId');
    let regId:number = rId;
    this.http.get(environment.apiKey + 'dtlSubscriberPayments/GetReceiptbyRegId/' + regId)
    .toPromise()
    .then((res:any) => {
      this.pPaymentHistory = Object.assign(res);
    });
  }

  saveSubscription(subscriptionId:number){
    let regId:any = localStorage.getItem('buyerRegId');
    this.pDtlSubscriberPayment.regId = regId;
    this.pDtlSubscriberPayment.subscriptionId = subscriptionId;
    // alert(JSON.stringify(this.pDtlSubscriberPayment));
    this.http.post(environment.apiKey + 'dtlSubscriberPayments',this.pDtlSubscriberPayment)
    .subscribe(
      (res:any) => {
        this.pay(res.regName,res.mobileNo,res.emailId,res.amount);
        console.log(JSON.stringify(res));
      },
      err => {
        alert('Something went wrong !');
      }
    );
  }

  updateSubscription(razorpayPaymentId:string){
    let regId:any = localStorage.getItem('buyerRegId');
    this.pDtlSubscriberPayment.regId = regId;
    this.pDtlSubscriberPayment.razorPaymentId = razorpayPaymentId;
    return this.http.post(environment.apiKey + 'dtlSubscriberPayments/PostPaymentDetails?regId=' + regId,this.pDtlSubscriberPayment);
  }

  options = {
    "POST": "https://api.razorpay.com/v1/payment_links",
    "upi_link": "true",
    "key": environment.rzpKey, // Enter the Key ID generated from the Dashboard
    "type": "link",
    "amount": "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "email_id": "",
    "currency": "INR",
    "name": "D' Profile",
    "description": "DESPA TECHNOLOGIES PVT LTD",
    "image": "assets/img/D'Profile.PNG",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notify": {
      "sms": true,
      "email": true
    },
    "reminder_enable": true,
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#002060"
    },
    "handler": function (response: any) {
      let paymentId = response.razorpay_payment_id
      // location.href = "http://localhost:4200/payment-receipt?paymentId=" + paymentId;
      location.href = "https://dprofile.in/payment-receipt?paymentId=" + paymentId;

    },
  };  

  rzp1: any;

  url = "https://dashboard.razorpay.com/app/paymentlinks/new";
  pay(name:string, mobile:string, email:string,amount:string) {
    this.options.amount = amount;
    this.options.prefill.name = name;
    this.options.prefill.email = email;
    this.options.prefill.contact = mobile;
    console.log(name,mobile,email,amount);
    this.options.notify.email = true;
    this.options.notify.sms = true;
    this.options.POST = "https://api.razorpay.com/v1/payment_links";
    this.options.upi_link = "true"
    this.options.type = "link"
    this.rzp1 = new this.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }
}
