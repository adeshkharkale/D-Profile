import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgTinyUrlService } from 'ng-tiny-url';
import { SReferAndEarnService } from './s-refer-and-earn.service';

@Component({
  selector: 'app-refer-and-earn',
  templateUrl: './refer-and-earn.component.html',
  styleUrls: ['./refer-and-earn.component.scss']
})
export class ReferAndEarnComponent implements OnInit {

  regId: number = 0;

  mail: boolean;
  whatsapp: boolean;
  sms: boolean;
  telegram: boolean;
  flag: number = 1;
  input: string = "";



  date: Date = new Date();

  value: number = 0;


  constructor(public objSReferAndEarnService: SReferAndEarnService, private tinyUrl: NgTinyUrlService) { }

  ngOnInit(): void {
    // this.value=100
    let regId: any = localStorage.getItem('regId');
    this.regId = regId;
    this.input = "";

    this.mail = false;
    this.whatsapp = true;
    this.sms = false;
    this.telegram = false;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onSelect(param: string) {
    this.mail = false;
    this.whatsapp = false;
    this.sms = false;
    this.telegram = false;
    if (param == "1") {
      this.whatsapp = true;
      this.flag = 1;
      this.input = "";
    }
    else if (param == "2") {
      this.sms = true;
      this.flag = 2;
      this.input = "";
    }
    else if (param == "3") {
      this.mail = true;
      this.flag = 3;
      this.input = "";
    }
    else {
      this.telegram = true;
      this.flag = 4;
    }
  }

  invite(referalDetails: string) {
    let mob: any = localStorage.getItem('mobile');
    let Name: any = localStorage.getItem('regName');
    let referal_code: any = localStorage.getItem('referal_code');
    let regName: string = Name.toString().split('"')[1];
    let referalCode: string = referal_code.toString().split('"')[1];
    let myMobile: string = mob.toString().split('"')[1];

    let shortenedUrl: string;

    let url: string = "https://dprofile.in/profile?user=" + myMobile;
    this.tinyUrl.shorten(url).subscribe(res => {
      shortenedUrl = res;
      this.shareTo(shortenedUrl, referalDetails,regName,referalCode,url);
    });
  }

  shareTo(shortenedUrl: string, data: string,regName:string,referalCode:string,url:string) {
    let body: string = "%0a%0aD'Profile of " + regName + "%0a%0a" + "Dear Sir/Madam,%0a"
      + "Glad to share that I am now available globally on DESPA's *D'Profile* which is unique in it's kind and highly recommended digital platform.%0a"
      + "%0aMake Yourself Globally Known like me."
      + "%0aIt's Really amazing...try it now.%0a%0aWith Regards,%0a" + regName + "%0a%0aPlease click on below link to get registered with D'Profile%0a"
      + "www.despa.co.in"
      + "%0a%0aUse My Referal Code : " + referalCode;


      let bodyMail: string = shortenedUrl + "%0a%0a D'Profile of " + regName
      + "%0a%0a Dear Sir/Madam, %0aGlad to share that I am available on DESPA's D'Profile which is unique in it's kind and highly recommended digital platform.'%0a%0a"
      + "Make Yourself Globally Known like me."
      + "%0a%0a It's really amazing...try it now.%0a%0a With Regards, %0a"
      + regName;
      + "%0a%0a Please click on below link to get registered with D'Profile %0a www.despa.co.in"
    + "%0a%0aUse My Referal Code : " + referalCode;

    if (this.flag == 1) {

      let whatsappUrl: string = "https://api.whatsapp.com/send?phone=+91" + data + "&text=" + url + body;
      window.open(whatsappUrl, '_blank');
    }
    else if (this.flag == 2) {
      var sms = "sms://+91" + data + "?&body=" + shortenedUrl + body;
      window.open(sms);
    }
    else if (this.flag == 3) {
      var mail = "mailto:" + data + "?subject = DProfile&body=" + bodyMail;
      window.location.href = mail;
    }
  }
}
