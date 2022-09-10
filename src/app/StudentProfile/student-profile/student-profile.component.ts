import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { ShareProfilePopupComponent } from 'src/app/Profile/profile/share-profile-popup/share-profile-popup.component';
import { StudentProfileService } from '../student-profile.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  regId:any;

  constructor(public dialog : MatDialog, public objStudentProfileService:StudentProfileService) { }

  ngOnInit(): void {
    this.objStudentProfileService.bindDataMethod(this.regId);
  }

  popup1(){
    this.dialog.open(ShareProfilePopupComponent, {
      panelClass:'custom-dialog-container',
      data:{
        name: this.objStudentProfileService.pCreateProfile.name,
        mobile: this.objStudentProfileService.pCreateProfile.mobileNo,
        image: this.objStudentProfileService.pCreateProfile.profilePhotoURL
      }
    })
  }
}
