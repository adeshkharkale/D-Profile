import { Component, OnInit } from '@angular/core';
import { SSideMenuService } from './s-side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  userImg:string='assets/img/user.png';
  regName:string;
  mobile:string;

  constructor(public objSSideMenuService:SSideMenuService) { }

  ngOnInit(): void {
    this.objSSideMenuService.getSideMenu();

    let name: any = localStorage.getItem('regName');
    this.regName = name.toString().split('"')[1];
    let mob: any = localStorage.getItem('mobile');
    this.mobile = mob.toString().split('"')[1];
    let image:any = localStorage.getItem('profilePhoto');

    if(image != '""'){
      this.userImg = image.toString().split('"')[1];
    }
   
    console.log(this.userImg)
  }

}
