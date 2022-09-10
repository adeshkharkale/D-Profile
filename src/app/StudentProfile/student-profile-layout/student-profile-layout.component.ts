import { Component, OnInit } from '@angular/core';
import { SCreateProfileService } from 'src/app/Pages/create-profile/s-create-profile.service';

@Component({
  selector: 'app-student-profile-layout',
  templateUrl: './student-profile-layout.component.html',
  styleUrls: ['./student-profile-layout.component.scss']
})
export class StudentProfileLayoutComponent implements OnInit {

  constructor(public objSProfileService:SCreateProfileService) { 
    
   }

  ngOnInit(): void {
    
  }

}
