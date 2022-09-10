import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mAwards, mCertificate, mCountry, mCreateProfile, mDistrict, mEducationQualification, mExpertise, mExtraCurriculam, mGallery, mInternship, mMaritalStatus, mQualification, mState, mStatus } from '../create-profile/m-create-profile.model';

@Injectable({
  providedIn: 'root'
})
export class SCreateFresherService {

  regId: any = localStorage.getItem('regId');

  pCreateProfile: mCreateProfile = new mCreateProfile();
  pCertificate: mCertificate = new mCertificate();
  pGallery: mGallery = new mGallery();

  /******* Array Declare for Dropdowns *********/
  arrDistrict:mDistrict[];
  arrState:mState[];
  arrCountry:mCountry[];
  arrMaritalStatus:mMaritalStatus[];
  arrQualification:mQualification[];
  arrStatus:mStatus[];

  /********** Array Declare for Tables ***********/
  arrTblQualification:mEducationQualification[]=[];
  arrKeySkill:mExpertise[]=[];
  arrTblInternship:mInternship[]=[];
  arrExtraCurriculam:mExtraCurriculam[]=[];
  arrAchievement:mAwards[]=[];
  arrCertificate: mCertificate[];
  arrGallery: mGallery[];

  constructor(private http: HttpClient) { }

  bindMethod(){
    this.getProfileByRegId();
  }
  bindTableMethod(regId:number){
    this.getQualificationTable(regId);
    this.getSkillByRegId();
    this.getInternshipTable(regId);
    this.getExtraCurriculamByRegId(regId);
    this.getAchievementByRegId(regId);
  }
  bindDropdowns(){
    this.getDistrict();
    this.getState();
    this.getCountry();
    this.getMartialStatus();
    this.getQualification();
    this.getStatus();
  }

/************* GET METHODS FOR DROPDOWN STARTS ***************/
  getDistrict(){
    this.http.get(environment.apiKey + 'mstDistricts/')
    .toPromise()
    .then(res => this.arrDistrict = res as mDistrict[]);
  }
  getState(){
    this.http.get(environment.apiKey + 'mstStates/')
    .toPromise()
    .then(res => this.arrState = res as mState[]);
  }
  getCountry(){
    this.http.get(environment.apiKey + 'mstCountries/')
    .toPromise()
    .then(res => this.arrCountry = res as mCountry[]);
  }
  getMartialStatus(){
    this.http.get(environment.apiKey + 'mstMaritalStatus/')
    .toPromise()
    .then(res => this.arrMaritalStatus = res as mMaritalStatus[]);
  }
  getQualification(){
    this.http.get(environment.apiKey + 'mstQualifications/')
    .toPromise()
    .then(res => this.arrQualification = res as mQualification[]);
  }
  getStatus(){
    this.http.get(environment.apiKey + 'mstStatus/')
    .toPromise()
    .then(res => this.arrStatus = res as mStatus[]);
  }
/************* GET METHODS FOR DROPDOWN ENDS ***************/

/************* GET/SAVE/UPDATE 1st STEP STARTS ***************/
  getProfileByRegId() {
    this.http.get(environment.apiKey + 'dtl_Profile/Getdtl_ProfilesByRegId?regId=' + this.regId)
      .toPromise()
      .then((res: any) => {
        this.pCreateProfile = Object.assign(res);
        let date = res.dob;
        this.pCreateProfile.dob = date.toString().split('T')[0];
      },
        err => { }
      );
  }
  saveFresherProfile(){
    this.pCreateProfile.regId = this.regId;
    this.http.post(environment.apiKey + 'dtl_Profile', this.pCreateProfile)
      .subscribe(
        res => { },
        err => {
          alert('Failed..!');
        }
      );
  }
  updateFresherProfile(){
    console.log(this.pCreateProfile);
    this.http.put(environment.apiKey + 'dtl_Profile/' + this.pCreateProfile.profileId, this.pCreateProfile)
      .subscribe(
        res => {
        },
        err => {
          alert('Something went wrong !');
        }
      );
  }
/************* GET/SAVE/UPDATE 1st STEP ENDS ***************/

/************************ GET TABLE METHOD STARTS **************************/
  getQualificationTable(regId:number){
    this.http.get(environment.apiKey + 'dtl_Qualification/Getdtl_QualificationByRegId/' + regId)
      .subscribe(
        res => {
          let a = Object.assign(res)
          for (let i = 0; i < a.length; i++) {
            this.arrTblQualification.push(Object.assign(a[i]));
          }
        }
      )
  }
  getSkillByRegId() {
    this.http.get(environment.apiKey + 'dtl_Expertise/Getdtl_ExpertisesByRegId?regId=' + this.regId)
      .toPromise()
      .then(
        (res: any) => {
          this.arrKeySkill = res as [];
        },
        err => { }
      );
  }
  getInternshipTable(regId:number){
    this.http.get(environment.apiKey + 'dtl_Internship/GetInternshipByRegId/' +regId)
    .subscribe(
      res => {
        let abc = Object.assign(res)
        for (let i = 0; i < abc.length; i++) {
          this.arrTblInternship.push(Object.assign(abc[i]));
        }
      }
    )
  }
  getExtraCurriculamByRegId(regId:number) {
    this.http.get(environment.apiKey + 'dtl_ExtraCurriculam/Getdtl_ExtraCurriculationByRegId/' + regId)
      .toPromise()
      .then(
        (res: any) => {
          this.arrExtraCurriculam = res as [];
        },
        err => { }
      );
  }
  getAchievementByRegId(regId:number) {
    this.http.get(environment.apiKey + 'dtl_Awards/Getdtl_AwardsByRegId?regId=' + regId)
      .toPromise()
      .then(
        (res: any) => {
          this.arrAchievement = res as [];
        },
        err => { }
      );
  }
/************************ GET TABLE METHOD ENDS **************************/

/*********************** SAVE TABLE METHOD STARTS ************************/ 
  saveEducationalBackground(regId:number){
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.arrTblQualification);
    return this.http.post(environment.apiKey + 'dtl_Qualification/' + regId, body, { 'headers': headers })
  }
  saveSkillExperties(regId:number) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.arrKeySkill);
    return this.http.post(environment.apiKey + 'dtl_Expertise/' + regId, body, { 'headers': headers })
  }
  saveInternship(regId:number){
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.arrTblInternship);
    console.log(body)
    return this.http.post(environment.apiKey + 'dtl_Internship/' + regId, body, { 'headers': headers })
  }
  saveExtraCurriculam(regId:number) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.arrExtraCurriculam);
    return this.http.post(environment.apiKey + 'dtl_ExtraCurriculam/' + regId, body, { 'headers': headers })
  }
  saveAchievement(regId:number) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.arrAchievement);
    return this.http.post(environment.apiKey + 'dtl_Awards/' + regId, body, { 'headers': headers })
  }
/*********************** SAVE TABLE METHOD ENDS ************************/ 

/********************** FILE UPLOAD STARTS ****************************/
  getCertificatesByRegId() {
    this.http.get(environment.apiKey + 'dtl_Certificate/' + this.regId)
      .toPromise()
      .then(res => this.arrCertificate = res as mCertificate[]);
  }
  uploadResume(file: any) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post(environment.apiKey + 'dtl_Profile/UploadResume?regId=' + this.regId, formData)
  }
  uploadDocuments(file: any, flag: string) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    if (flag == "photo") {
     return this.http.post(environment.apiKey + 'dtl_Profile/UploadProfilePhoto?regId=' + this.regId, formData)
    }
    else {
     return this.http.post(environment.apiKey + 'dtl_Certificate/UploadCertificate?regId=' + this.regId, formData)
    }
  }
  deleteCert(certificateId: number) {
    this.http.delete(environment.apiKey + 'dtl_Certificate/' + certificateId)
      .subscribe(
        res => {
          this.getCertificatesByRegId();
        },
        err => {
          alert('Something went wrong !');
        }
      );
  }
/********************** FILE UPLOAD ENDS ****************************/

}
