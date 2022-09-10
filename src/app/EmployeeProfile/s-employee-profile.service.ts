import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mAwards, mCertificate, mCreateProfile, mEducationQualification, mExperience, mExpertise, mExtraCurriculam, mGallery } from '../Pages/create-profile/m-create-profile.model';

@Injectable({
  providedIn: 'root'
})
export class SEmployeeProfileService {

  regId: any = localStorage.getItem('regId');

  pCreateProfile:mCreateProfile = new mCreateProfile();
  
  arrSkillExperties:mExpertise[]=[];
  arrTblExperience:mExperience[]=[];
  arrTblQualification:mEducationQualification[]=[];
  arrExtraCurriculam:mExtraCurriculam[]=[];
  arrAchievement:mAwards[]=[];

  arrCertificate: mCertificate[];
  arrGallery: mGallery[];



  constructor(private http: HttpClient) { }

  bindDataMethod(regId:number){
    this.getProfileByRegId();
    this.getSkillByRegId();
    this.getQualificationTable();
    this.getExperienceByRegId();
    this.getExtraCurriculamByRegId();
    this.getAchievementByRegId();
  }
  
  getProfileByRegId(){
    this.http.get(environment.apiKey + 'dtl_Profile/dtl_ProfilesByRegId?regId=2')
      .toPromise()
      .then((res: any) => {
        this.pCreateProfile = Object.assign(res);
        let date = res.dob;
        this.pCreateProfile.dob = date.toString().split('T')[0];
        console.log(res)
      },
        err => { }
      );
  }
  getSkillByRegId() {
    this.http.get(environment.apiKey + 'dtl_Expertise/Getdtl_ExpertisesByRegId?regId=2')
      .toPromise()
      .then(
        (res: any) => {
          this.arrSkillExperties = res as [];
        },
        err => { }
      );
  }
  getQualificationTable(){
    this.http.get(environment.apiKey + 'dtl_Qualification/Getdtl_QualificationByRegId/2')
    .toPromise()
    .then(
      (res: any) => {
        this.arrTblQualification = res as [];
      },
      err => { }
    );
  }
  getExperienceByRegId() {
    this.http.get(environment.apiKey + 'dtl_Experience/Getdtl_ExperiencesByRegId?regId=2')
      .toPromise()
      .then(
        (res: any) => {
          this.arrTblExperience = res as [];
        },
        err => { }
      );
  }
  getExtraCurriculamByRegId() {
    this.http.get(environment.apiKey + 'dtl_ExtraCurriculam/Getdtl_ExtraCurriculationByRegId/2')
      .toPromise()
      .then(
        (res: any) => {
          this.arrExtraCurriculam = res as [];
        },
        err => { }
      );
  }
  getAchievementByRegId() {
    this.http.get(environment.apiKey + 'dtl_Awards/Getdtl_AwardsByRegId?regId=2')
      .toPromise()
      .then(
        (res: any) => {
          this.arrAchievement = res as [];
        },
        err => { }
      );
  }
  getCertificatesByRegId() {
    this.http.get(environment.apiKey + 'dtl_Certificate/' + this.regId)
      .toPromise()
      .then(res => this.arrCertificate = res as mCertificate[]);
  }
  getGalleryByRegId() {
    this.http.get(environment.apiKey + 'dtl_Gallery/' + this.regId)
      .toPromise()
      .then(res => this.arrGallery = res as mGallery[]);
  }

}
