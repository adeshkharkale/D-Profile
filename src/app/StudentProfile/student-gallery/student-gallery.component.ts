import { Component, OnInit } from '@angular/core';
import { StudentProfileService } from '../student-profile.service';

@Component({
  selector: 'app-student-gallery',
  templateUrl: './student-gallery.component.html',
  styleUrls: ['./student-gallery.component.scss']
})
export class StudentGalleryComponent implements OnInit {

  constructor(public objStudentProfileService:StudentProfileService) { }

  ngOnInit(): void {
    this.objStudentProfileService.getCertificatesByRegId();
    this.objStudentProfileService.getGalleryByRegId();
  }

}
