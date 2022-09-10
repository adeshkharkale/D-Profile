import { Component, OnInit } from '@angular/core';
import { StudentProfileService } from '../student-profile.service';

@Component({
  selector: 'app-student-expertise',
  templateUrl: './student-expertise.component.html',
  styleUrls: ['./student-expertise.component.scss']
})
export class StudentExpertiseComponent implements OnInit {

  regId:any;

  constructor(public objStudentProfileService:StudentProfileService) { }

  ngOnInit(): void {
    this.objStudentProfileService.bindDataMethod(this.regId);
  }

}
