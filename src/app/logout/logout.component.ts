import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userRoleId');
    localStorage.removeItem('regId');
    localStorage.removeItem('expTime');
    localStorage.removeItem('regName');
    localStorage.removeItem('mobile');
    localStorage.removeItem('email');
    localStorage.removeItem('referal_code');
    localStorage.removeItem('profilePhoto');
    localStorage.removeItem('buyerRegId');
    localStorage.removeItem('rzp_device_id');
    this.router.navigateByUrl('');
  }

}
