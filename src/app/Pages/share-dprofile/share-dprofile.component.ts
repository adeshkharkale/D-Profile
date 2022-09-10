import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgTinyUrlService } from 'ng-tiny-url';

@Component({
  selector: 'app-share-dprofile',
  templateUrl: './share-dprofile.component.html',
  styleUrls: ['./share-dprofile.component.scss']
})
export class ShareDProfileComponent implements OnInit {

  regName: string;
  profilePhoto:string;

  mail: boolean = false;
  whatsapp: boolean = true;
  sms: boolean = false;
  telegram: boolean = false;
  flag: number = 1;
  input: string = "";
  icon: string = "";

  constructor( private tinyUrl: NgTinyUrlService) { }

  ngOnInit(): void {

    let photo: any = localStorage.getItem('profilePhoto');
    this.profilePhoto = photo.toString().split('"')[1];

    let name: any = localStorage.getItem('regName');
    this.regName = name.toString().split('"')[1];

    this.input = "";
    this.icon = "fab fa-whatsapp";
    this.mail = false;
    this.whatsapp = true;
    this.sms = false;
    this.telegram = false;
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
      this.icon = "fab fa-whatsapp";
    }
    else if (param == "2") {
      this.sms = true;
      this.flag = 2;
      this.input = "";
      this.icon = "fa fa-sms";
    }
    else if (param == "3") {
      this.mail = true;
      this.flag = 3;
      this.input = "";
      this.icon = "fa fa-envelope";
    }
  }

  share(referalDetails: string) {
    let mob: any = localStorage.getItem('mobile');
    let myMobile: string = mob.toString().split('"')[1];

    let shortenedUrl: string;

    let url: string = "https://dprofile.in/profile?user=" + myMobile;
    this.tinyUrl.shorten(url).subscribe(res => {
      shortenedUrl = res;
      this.shareTo(shortenedUrl, referalDetails,url);
    });
  }

  
  shareTo(shortenedUrl: string, data: string,url:string) {
    let body: string = "%0a%0aD'Profile of " + this.regName + "%0a%0a" + "Dear Sir/Madam,%0a"
      + "Glad to share that I am now available globally on DESPA's *D'Profile* which is unique in it's kind and highly recommended digital platform.%0a"
      + "%0aMake Yourself Globally Known like me."
      + "%0aIt's Really amazing...try it now.%0a%0aWith Regards,%0a" + this.regName + "%0a%0aPlease click on below link to get registered with D'Profile%0a"
      + "www.despa.co.in"


      let bodyMail: string = shortenedUrl + "%0a%0a D'Profile of " + this.regName
      + "%0a%0a Dear Sir/Madam, %0aGlad to share that I am available on DESPA's D'Profile which is unique in it's kind and highly recommended digital platform.'%0a%0a"
      + "Make Yourself Globally Known like me."
      + "%0a%0a It's really amazing...try it now.%0a%0a With Regards, %0a"
      + this.regName;
      + "%0a%0a Please click on below link to get registered with D'Profile %0a www.despa.co.in"

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
