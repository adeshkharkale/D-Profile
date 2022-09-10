import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { mAwards, mEducationQualification, mExperience, mExpertise, mExtraCurriculam } from '../create-profile/m-create-profile.model';
import { SCreateExperiencedService } from './s-create-experienced.service';

@Component({
  selector: 'app-create-experinced',
  templateUrl: './create-experinced.component.html',
  styleUrls: ['./create-experinced.component.scss']
})
export class CreateExperincedComponent implements OnInit {
  
  regId: any = 0;

  defaultPhoto:string = 'assets/img/user.png';
  defaultLogo:string = 'assets/img/default_logo.jpg';

  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  constructor(public objSCreateExperiencedService:SCreateExperiencedService,
    private imageCompress: NgxImageCompressService) { 
    this.regId = localStorage.getItem('regId');
  }

  ngOnInit(): void {
    if(this.objSCreateExperiencedService.pCreateProfile.name == ""){
      let name:any = localStorage.getItem('regName');
      this.objSCreateExperiencedService.pCreateProfile.name = name.toString().split('"')[1];
      }
  
      if(this.objSCreateExperiencedService.pCreateProfile.emailId == ""){
        let mail:any = localStorage.getItem('email');
        this.objSCreateExperiencedService.pCreateProfile.emailId = mail.toString().split('"')[1];
      }
     
      if(this.objSCreateExperiencedService.pCreateProfile.mobileNo == ""){
        let mob:any = localStorage.getItem('mobile');
        this.objSCreateExperiencedService.pCreateProfile.mobileNo = mob.toString().split('"')[1];
      }
    this.objSCreateExperiencedService.bindDataMethod(this.regId);
    this.objSCreateExperiencedService.bindDropdowns();
    this.objSCreateExperiencedService.getCertificatesByRegId();
    this.objSCreateExperiencedService.getGalleryByRegId();
  }

/******************************* STEP 1 STARTS *************************************/
  NextInExperiencedProfile(){
    if (this.objSCreateExperiencedService.pCreateProfile.profileId == 0) {
      this.objSCreateExperiencedService.saveExperiencedProfile();
    }
    else {
      this.objSCreateExperiencedService.updateExperiencedProfile();
    }
  }
/******************************* STEP 1 ENDS *************************************/

/******************************* STEP 2 STARTS ***********************************/
  NextInEducation() {
    this.objSCreateExperiencedService.saveEducationalQualifications(this.regId)
      .subscribe(
        (res) => {},
        err => {
          alert('Failed');
        }
      )
  }
  addEducationTbl(college: string, qualificationId: number, course: string, score: string, yearofpassing: string, statusId: number) {
    let qualification: string = '';
    let result = this.objSCreateExperiencedService.arrQualification.filter(u => u.qualificationId == qualificationId);
    result.forEach(element => {
      qualification = element.qualification;
    });
    let status: string = '';
    let result1 = this.objSCreateExperiencedService.arrStatus.filter(c => c.statusId == statusId);
    result1.forEach(element => {
      status = element.status;
    });
    this.objSCreateExperiencedService.arrTblQualification.push(new mEducationQualification(0, this.regId, college, qualificationId, qualification, course, parseInt(score), parseInt(yearofpassing), statusId, status));
  }
  deleteFromQualificationTbl(index: number) {
    this.objSCreateExperiencedService.arrTblQualification.splice(index, 1);
  }
/******************************** STEP 2 ENDS *************************************/

/******************************* STEP 3 STARTS ************************************/
  NextInExperience() {
    this.objSCreateExperiencedService.saveExperince(this.regId)
      .subscribe(
        (res) => {},
        err => {
          alert('Failed');
        }
      )
  }
  addExperienceTbl(college: string, designation: string, from: string, to: string,description:string) {
    this.objSCreateExperiencedService.arrTblExperience.push(new mExperience(0, this.regId, college, designation, new Date(from),new Date(to) ,description));
  }
  deleteFromExperienceTbl(index: number) {
    this.objSCreateExperiencedService.arrTblExperience.splice(index, 1);
  }
/********************************* STEP 3 ENDS ************************************/

/******************************* STEP 4 STARTS ************************************/
  NextInSkill(){
    this.objSCreateExperiencedService.saveSkillExperties(this.regId)
      .subscribe(
        (res) => {},
        err => {
          alert('Failed');
        }
      )
  }
  addSkill(expertise: string, description: string) {
    this.objSCreateExperiencedService.arrSkillExperties.push(new mExpertise(0, this.regId, expertise, description));
  }
  deleteFromSkillTbl(index: number) {
    this.objSCreateExperiencedService.arrSkillExperties.splice(index, 1);
  }
/******************************* STEP 4 ENDS ************************************/

/******************************* STEP 5 STARTS **********************************/
  NextInExtraCurriculam(){
    this.objSCreateExperiencedService.saveExtraCurriculam(this.regId)
      .subscribe(
        (res) => {},
        err => {
          alert('Failed');
        }
      )
  }
  addExtraCurriculam(activity: string, description: string) {
    this.objSCreateExperiencedService.arrExtraCurriculam.push(new mExtraCurriculam(0, this.regId, activity, description));
  }
  deleteFromExtraCurricuTbl(index: number) {
    this.objSCreateExperiencedService.arrExtraCurriculam.splice(index, 1);
  }
/******************************* STEP 5 ENDS ************************************/

/******************************* STEP 6 STARTS **********************************/
  NextInAchievement(){
    this.objSCreateExperiencedService.saveAchievement(this.regId)
      .subscribe(
        (res) => {},
        err => {
          alert('Failed');
        }
      )
  }
  addachievements(award: string, description: string) {
    this.objSCreateExperiencedService.arrAchievement.push(new mAwards(0, this.regId, award, description));
  }
  deleteFromAchievementTbl(index: number) {
    this.objSCreateExperiencedService.arrAchievement.splice(index, 1);
  }
/******************************* STEP 6 ENDS ************************************/

/******************************* STEP 7 STARTS **********************************/
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

          this.objSCreateExperiencedService.uploadDocuments(imageFile, flag).subscribe(
            (res) => {
              if (flag == "gallery") {
                this.objSCreateExperiencedService.getGalleryByRegId();
              }
              else if (flag == "cert") {
                this.objSCreateExperiencedService.getCertificatesByRegId();
              }
              else{
                this.objSCreateExperiencedService.getProfileByRegId();
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
    this.objSCreateExperiencedService.deleteCert(certificateId);
  }
  removeGalleryImage(galleryId: number) {
    this.objSCreateExperiencedService.deleteGallery(galleryId);
  }

  uploadGalleryPhoto() {
    if(this.objSCreateExperiencedService.arrGallery.length <= 18){
    this.compressFile('gallery');
    }
    else{
      alert('Upload Only 18 Photos');
    }
  }
  uploadCertificate() {
    if(this.objSCreateExperiencedService.arrCertificate.length <= 5){
    this.compressFile('cert');
  }
  else{
    alert('Upload Only 5 Precious Certificates');
  }
  }
  uploadResume(event: any) {
    let selectedFile = <File>event.target.files[0];
    this.objSCreateExperiencedService.uploadResume(selectedFile)
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
