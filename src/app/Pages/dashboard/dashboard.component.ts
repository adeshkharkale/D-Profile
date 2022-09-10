import { Component, OnInit } from '@angular/core';
import { SDashboardService } from './s-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  regName:string;
  
  total:number;
  active:number;
  earning:number;



  constructor(public objSDashboardService:SDashboardService) { }

  ngOnInit(): void {
    let name:any = localStorage.getItem('regName');
    this.regName = name.toString().split('"')[1];

    this.objSDashboardService.getData()
    .subscribe(
      (res:any) => {
        this.total = res.total;
        this.active = res.active;
        this.earning = res.earning;
      },
      err => {}
    );
  }

  show(){
    let mob: any = localStorage.getItem('mobile');
    let myMobile: string = mob.toString().split('"')[1]; 

    // let url: string = "https://dprofile.in/profile?user=" + myMobile;
    let url: string = "http://localhost:4200/profile?user=" + myMobile;

    window.open(url, '_blank')
  }
}
