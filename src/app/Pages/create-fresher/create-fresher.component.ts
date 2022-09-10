import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { mAwards, mEducationQualification, mExpertise, mExtraCurriculam, mInternship } from '../create-profile/m-create-profile.model';
import { SCreateFresherService } from './s-create-fresher.service';

@Component({
  selector: 'app-create-fresher',
  templateUrl: './create-fresher.component.html',
  styleUrls: ['./create-fresher.component.scss']
})
export class CreateFresherComponent implements OnInit {

  regId: any = 0;
  profileId: number = 0;

  defaultPhoto:string = 'assets/img/user.png';
  defaultLogo:string = 'assets/img/default_logo.jpg';

  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  constructor(public objSCreateFresherService:SCreateFresherService,
    private imageCompress: NgxImageCompressService) { 
    this.regId = localStorage.getItem('regId');
   }

  ngOnInit(): void {
    if(this.objSCreateFresherService.pCreateProfile.name == ""){
      let name:any = localStorage.getItem('regName');
      this.objSCreateFresherService.pCreateProfile.name = name.toString().split('"')[1];
      }
  
      if(this.objSCreateFresherService.pCreateProfile.emailId == ""){
        let mail:any = localStorage.getItem('email');
        this.objSCreateFresherService.pCreateProfile.emailId = mail.toString().split('"')[1];
      }
     
      if(this.objSCreateFresherService.pCreateProfile.mobileNo == ""){
        let mob:any = localStorage.getItem('mobile');
        this.objSCreateFresherService.pCreateProfile.mobileNo = mob.toString().split('"')[1];
      }
    this.objSCreateFresherService.bindMethod();
    this.objSCreateFresherService.bindTableMethod(this.regId);
    this.objSCreateFresherService.bindDropdowns();
    this.objSCreateFresherService.getCertificatesByRegId();
  }

/******************************* STEP 1 STARTS *************************************/
  NextInFresherProfile(){
    if (this.objSCreateFresherService.pCreateProfile.profileId == 0) {
      this.objSCreateFresherService.saveFresherProfile();
    }
    else {
      this.objSCreateFresherService.updateFresherProfile();
    }
  }
/******************************* STEP 1 ENDS *************************************/

/******************************* STEP 2 STARTS *************************************/
  NextInEducation(){
    this.objSCreateFresherService.saveEducationalBackground(this.regId)
      .subscribe(
        (res) => {},
        err => {
          alert('Failed');
        }
      )
  }
  addEducationTbl(college: string, qualificationId: number, course: string, score: string, yearofpassing: string, statusId: number) {
    let qualification: string = '';
    let result = this.objSCreateFresherService.arrQualification.filter(u => u.qualificationId == qualificationId);
    result.forEach(element => {
      qualification = element.qualification;
    });
    let status: string = '';
    let result1 = this.objSCreateFresherService.arrStatus.filter(c => c.statusId == statusId);
    result1.forEach(element => {
      status = element.status;
    });
    this.objSCreateFresherService.arrTblQualification.push(new mEducationQualification(0, this.regId, college, qualificationId, qualification, course, parseInt(score), parseInt(yearofpassing), statusId, status));
  }
  deleteFromQualificationTbl(index: number) {
    this.objSCreateFresherService.arrTblQualification.splice(index, 1);
  }
/******************************* STEP 2 ENDS *************************************/

/******************************* STEP 3 STARTS *************************************/
  NextInSkill(){
    this.objSCreateFresherService.saveSkillExperties(this.regId)
      .subscribe(
        (res) => {},
        err => {
          alert('Failed');
        }
      )
  }
  addSkill(expertise: string, description: string) {
    this.objSCreateFresherService.arrKeySkill.push(new mExpertise(0, this.regId, expertise, description));
  }
  deleteFromSkillTbl(index: number) {
    this.objSCreateFresherService.arrKeySkill.splice(index, 1);
  }
/******************************* STEP 3 ENDS *************************************/

/******************************* STEP 4 STARTS *************************************/
  InternProjectNext() {
    this.objSCreateFresherService.saveInternship(this.regId)
      .subscribe(
        (res) => { },
        err => {
          alert('failed!');
        }
      )
  }
  addInternshipTable(internship: string, description: string) {
    this.objSCreateFresherService.arrTblInternship.push(new mInternship(0, this.regId, internship, description))
  }
  deleteFromInternshipTbl(index: number) {
    this.objSCreateFresherService.arrTblInternship.splice(index, 1);
  }
/******************************* STEP 4 ENDS *************************************/

/******************************* STEP 5 STARTS *************************************/
  NextInExtraCurriculam(){
    this.objSCreateFresherService.saveExtraCurriculam(this.regId)
      .subscribe(
        (res) => {},
        err => {
          alert('Failed');
        }
      )
  }
  addExtraCurriculam(activity: string, description: string) {
    this.objSCreateFresherService.arrExtraCurriculam.push(new mExtraCurriculam(0, this.regId, activity, description));
  }
  deleteFromExtraCurricuTbl(index: number) {
    this.objSCreateFresherService.arrExtraCurriculam.splice(index, 1);
  }
/******************************* STEP 5 ENDS *************************************/

/******************************* STEP 6 STARTS *************************************/
  NextInAchievement(){
    this.objSCreateFresherService.saveAchievement(this.regId)
      .subscribe(
        (res) => {},
        err => {
          alert('Failed');
        }
      )
  }
  addachievements(award: string, description: string) {
    this.objSCreateFresherService.arrAchievement.push(new mAwards(0, this.regId, award, description));
  }
  deleteFromAchievementTbl(index: number) {
    this.objSCreateFresherService.arrAchievement.splice(index, 1);
  }
/******************************* STEP 6 ENDS *************************************/
  
/******************************* STEP 7 STARTS ************************************/
  file: any;
  localUrl: any;
  localCompressedURl: any;
  sizeOfOriginalImage: number;
  sizeOFCompressedImage: number;

  compressFile(flag: string) {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      // this.imgResultBeforeCompress = image;
      // console.warn('Size in bytes was:', this.imageCompress.byteCount(image));

      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.imgResultAfterCompress = result;
          // create file from byte
          const imageName = 'abc';
          // call method that creates a blob from dataUri
          const imageBlob = this.dataURItoBlob(this.imgResultAfterCompress.split(',')[1]);
          //imageFile created below is the new compressed file which can be send to API in form data
          const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });
          //Upload Image     
           this.objSCreateFresherService.uploadDocuments(imageFile, flag).subscribe(
            (res) => {
              if (flag == "cert") {
                this.objSCreateFresherService.getCertificatesByRegId();
              }
              else{
                this.objSCreateFresherService.getProfileByRegId();
              }
            },
            (err) => {
              alert('Something went wrong !');
            }
          );;

        });
    });
  }
  dataURItoBlob(dataURI: any) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }

  removeCertImage(certificateId: number) {
    this.objSCreateFresherService.deleteCert(certificateId);
  }
  uploadCertificate() {
    if(this.objSCreateFresherService.arrCertificate.length <= 5){
    this.compressFile('cert');
  }
  else{
    alert('Upload Only 5 Precious Certificates');
  }
  }
  uploadResume(event: any) {
    let selectedFile = <File>event.target.files[0];
    this.objSCreateFresherService.uploadResume(selectedFile)
      .subscribe(
        (event: any) => {
        },
        err => {
          alert('Something went wrong !');
        }
      );
  }
  uploadProfilePhoto() {
    this.compressFile('photo');
  }
  onClickPreview(){
    let mob:any = localStorage.getItem('mobile');
    let mobile:string = mob.toString().split('"')[1];
    window.open('https://dprofile.in/profile?user=' + mobile,'_blank');
    // window.open('http://localhost:4200/profile?user=' + mobile,'_blank');
  }
/******************************* STEP 7 ENDS ************************************/

}
