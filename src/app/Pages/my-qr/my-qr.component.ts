import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import QrCodeWithLogo from "qrcode-with-logos";

@Component({
  selector: 'app-my-qr',
  templateUrl: './my-qr.component.html',
  styleUrls: ['./my-qr.component.scss']
})
export class MyQrComponent implements OnInit {

  mobile:string;

  constructor() { }

  ngOnInit(): void {

    let mob:any = localStorage.getItem('mobile');
    this.mobile = mob.toString().split('"')[1];

    let abc:any = document.getElementById("canvas");
    let img:any = document.getElementById("image");
    let qrcode = new QrCodeWithLogo({
      canvas: abc,
      content: "https://dprofile.in/profile?user=" + this.mobile,
      // content: "https://localhost:4200/profile?user=" + this.mobile,
      
      width: 180,
        // download: true,
      image: img,
      logo: {
        src: "assets/img/D'Profile.PNG"
      }
    });
    
    qrcode.toCanvas().then(() => {
      qrcode.toImage().then(() => {
        setTimeout(() => {
          qrcode.downloadImage("D'Profile");
        }, 2000);
      });
    });
  }

}
