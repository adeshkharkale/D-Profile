import { Component, OnInit } from '@angular/core';
import { SAdminHomeService } from './s-admin-home.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(public objSAdminHomeService:SAdminHomeService) { }

  ngOnInit(): void {
    this.objSAdminHomeService.getAdminDashboard();
  }

}
