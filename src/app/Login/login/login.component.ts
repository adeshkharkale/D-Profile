import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { mUserData } from '../m-user-data.model';
import { SUserDataService } from '../s-user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public objSUserDataService: SUserDataService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      if(localStorage.getItem('userRoleId') == '2'){
        this.router.navigateByUrl('dashboard');
      }
      else{
        this.router.navigateByUrl('admin-home');
      }
    }
  }

  login(form:NgForm){
    this.objSUserDataService.userLogin().subscribe(
      (data:any) => {
        localStorage.setItem('token',JSON.stringify(data.access_token));
        localStorage.setItem('userRoleId',JSON.stringify(data.user_role_id));
        localStorage.setItem('regId',JSON.stringify(data.reg_id));
        localStorage.setItem('expTime',JSON.stringify(data.expiration_Time));
        localStorage.setItem('regName',JSON.stringify(data.reg_name));
        localStorage.setItem('mobile',JSON.stringify(data.reg_mobile));
        localStorage.setItem('email',JSON.stringify(data.reg_email));
        localStorage.setItem('referal_code',JSON.stringify(data.referal_code));
        localStorage.setItem('profilePhoto',JSON.stringify(data.profile_photo));
        
        this.resetForm(form);
        if(data.user_role_id == 2){
          this.router.navigateByUrl('dashboard');
        }
        else if(data.user_role_id  == 1){
          this.router.navigateByUrl('admin-home');
        }
      },
      err => {
        alert('Something went wrong !')
      }
    )
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.objSUserDataService.pUserData = new mUserData();
  }
}
