import { Component, OnInit } from '@angular/core';
import { SEmployeeProfileService } from '../s-employee-profile.service';

@Component({
  selector: 'app-employee-gallery',
  templateUrl: './employee-gallery.component.html',
  styleUrls: ['./employee-gallery.component.scss']
})
export class EmployeeGalleryComponent implements OnInit {

  regId:any;

  constructor(public objSEmployeeProfileService: SEmployeeProfileService) { }

  ngOnInit(): void {
    this.objSEmployeeProfileService.getCertificatesByRegId();
    this.objSEmployeeProfileService.getGalleryByRegId();
  }

}
