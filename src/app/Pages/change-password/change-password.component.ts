import { Component, OnInit } from '@angular/core';
import { SUserDataService } from 'src/app/Login/s-user-data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  regId:number;
  mobile:string;
  email:string;

  constructor(public objSUserDataService:SUserDataService) { }

  ngOnInit(): void {
    let rId:any = localStorage.getItem('regId');
    this.regId = rId;

    let mob:any = localStorage.getItem('mobile');
    this.mobile = mob.toString().split('"')[1];

    let eml:any = localStorage.getItem('email');
    this.email = eml.toString().split('"')[1];
  }

  onClick(newPassword:string,confirmPassword:string){
    if(newPassword != confirmPassword){
      alert('Password Mismatch Found..! Enter Same Password in Both Inputs.');
    }
    else{
      this.objSUserDataService.changePassword(this.regId,confirmPassword)
      .subscribe(
        res => {
          alert('Password Changed Successfully.!');
        },
        err => {
          alert('Something went wrong !');
        }
      );
    }
  }
}
