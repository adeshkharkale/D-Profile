import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareProfilePopupComponent } from 'src/app/Profile/profile/share-profile-popup/share-profile-popup.component';
import { StudentProfileService } from 'src/app/StudentProfile/student-profile.service';
import { SEmployeeProfileService } from '../s-employee-profile.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  regId:any;

  constructor(public dialog : MatDialog,public objSEmployeeProfileService: SEmployeeProfileService) { }

  ngOnInit(): void {
    this.objSEmployeeProfileService.bindDataMethod(this.regId);
  }
  popup1(){
    this.dialog.open(ShareProfilePopupComponent, {
      panelClass:'custom-dialog-container',
      data:{
        name: this.objSEmployeeProfileService.pCreateProfile.name,
        mobile: this.objSEmployeeProfileService.pCreateProfile.mobileNo,
        image: this.objSEmployeeProfileService.pCreateProfile.profilePhotoURL
      }
    })
  }
}
