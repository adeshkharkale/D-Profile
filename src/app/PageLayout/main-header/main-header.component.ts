import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  userImg = "assets/img/user.png";

  constructor(private router:Router) { }

  ngOnInit(): void {
    let image:any = localStorage.getItem('profilePhoto');

    if(image != '""'){
      this.userImg = image.toString().split('"')[1];
    }
  }

  elem=document.documentElement;
  fullScreen(){
      this.elem.requestFullscreen();
      document.exitFullscreen();
  }


}
