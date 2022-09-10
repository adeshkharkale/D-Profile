import { Component, OnInit } from '@angular/core';
import { SEmployeeProfileService } from '../s-employee-profile.service';

@Component({
  selector: 'app-employee-expertise',
  templateUrl: './employee-expertise.component.html',
  styleUrls: ['./employee-expertise.component.scss']
})
export class EmployeeExpertiseComponent implements OnInit {

  regId:any;

  constructor(public objSEmployeeProfileService: SEmployeeProfileService) { }

  ngOnInit(): void {
    this.objSEmployeeProfileService.bindDataMethod(this.regId);
  }

}
