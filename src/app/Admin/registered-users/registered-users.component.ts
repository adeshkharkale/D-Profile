import { Component, OnInit } from '@angular/core';
import { SActiveUsersService } from '../active-users/s-active-users.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {

  constructor(public objSActiveUsersService:SActiveUsersService) { }

  ngOnInit(): void {
    this.objSActiveUsersService.getRegisteredUsers();
  }


}
