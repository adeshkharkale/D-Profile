import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SProfileService } from '../s-profile.service';
import { ContactComponent } from './contact/contact.component';
import { ShareProfilePopupComponent } from './share-profile-popup/share-profile-popup.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  myPopup:boolean = false;
  constructor(public dialog : MatDialog, public objSProfileService:SProfileService) { }
  ngOnInit(): void {
  }
 
  popup1(){
    this.dialog.open(ShareProfilePopupComponent, {
      panelClass:'custom-dialog-container',
      data:{
        name: this.objSProfileService.pCreateProfile.name,
        mobile: this.objSProfileService.pCreateProfile.mobileNo,
        image: this.objSProfileService.pCreateProfile.profilePhotoURL
      }
    })
  }

  profile_contact(){
    this.dialog.open(ContactComponent, {
      panelClass:'custom-dialog-container'
    })
  }

popup12(){
  this.myPopup = true;
}


}
