import { Component, OnInit } from '@angular/core';
import { SActiveUsersService } from './s-active-users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {

  constructor(public objSActiveUsersService:SActiveUsersService) { }

  ngOnInit(): void {
    this.objSActiveUsersService.getActiveUsers();
  }

}
