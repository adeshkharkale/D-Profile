import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ActivatedRoute } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { SCreateProfileService } from './s-create-profile.service';
import { mAwards, mExperience, mExpertise, mMembership } from './m-create-profile.model';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class CreateProfileComponent implements OnInit {

  defaultPhoto:string = 'assets/img/user.png';
  defaultLogo:string = 'assets/img/default_logo.jpg';

  researchProfileId: number = 0;
  noOfPaper: number = 0;

  submitted = false;
  completed = false;

  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute,
    private imageCompress: NgxImageCompressService, public objSCreateProfileService: SCreateProfileService) { }

  ngOnInit(): void {

    if(this.objSCreateProfileService.pCreateProfile.name == ""){
    let name:any = localStorage.getItem('regName');
    this.objSCreateProfileService.pCreateProfile.name = name.toString().split('"')[1];
    }

    if(this.objSCreateProfileService.pCreateProfile.emailId == ""){
      let mail:any = localStorage.getItem('email');
      this.objSCreateProfileService.pCreateProfile.emailId = mail.toString().split('"')[1];
    }
   
    if(this.objSCreateProfileService.pCreateProfile.mobileNo == ""){
      let mob:any = localStorage.getItem('mobile');
      this.objSCreateProfileService.pCreateProfile.mobileNo = mob.toString().split('"')[1];
    }
    this.objSCreateProfileService.bindDropdowns();
    this.objSCreateProfileService.bindDataByRegId();
    this.objSCreateProfileService.getCertificatesByRegId();
    this.objSCreateProfileService.getGalleryByRegId();
  }



  /*****************  End Step Control ********************/
  file: any;
  localUrl: any;
  localCompressedURl: any;
  sizeOfOriginalImage: number;
  sizeOFCompressedImage: number;

  /***********************************Start File Compression & Upload********************************/


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

          this.objSCreateProfileService.uploadDocuments(imageFile, flag).subscribe(
            (res) => {
              if (flag == "gallery") {
                this.objSCreateProfileService.getGalleryByRegId();
              }
              else if (flag == "cert") {
                this.objSCreateProfileService.getCertificatesByRegId();
              }
              else{
                this.objSCreateProfileService.getProfileByRegId();
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
    this.objSCreateProfileService.deleteCert(certificateId);
  }

  removeGalleryImage(galleryId: number) {
    this.objSCreateProfileService.deleteGallery(galleryId);
  }

  /*************************************End Image Compression*****************************************/

  /********************************************Start Step One*****************************************/

  uploadGalleryPhoto() {
    if(this.objSCreateProfileService.arrGallery.length <= 18){
    this.compressFile('gallery');
    }
    else{
      alert('Upload Only 18 Photos');
    }
  }

  uploadCertificate() {
    if(this.objSCreateProfileService.arrCertificate.length <= 5){
    this.compressFile('cert');
  }
  else{
    alert('Upload Only 5 Precious Certificates');
  }
  }

  uploadResume(event: any) {
    let selectedFile = <File>event.target.files[0];

    this.objSCreateProfileService.uploadResume(selectedFile)
      .subscribe(
        (event: any) => {
        },
        err => {
          alert('Something went wrong !');
        }
      );
  }

  uploadLogo() {
    this.compressFile('logo');
  }

  uploadProfilePhoto() {
    this.compressFile('photo');
  }

  saveDistrictId(districtId:number){
    this.objSCreateProfileService.pCreateProfile.districtId = districtId;
  }

  onAboutYouNext() {
      if (this.objSCreateProfileService.pCreateProfile.profileId == 0) {
        this.objSCreateProfileService.saveNewProfile();
      }
      else {
        this.objSCreateProfileService.updateProfile();
      }
  }

  /********************************************End Step One**************************************** */

  /********************************************Start Step Two**************************************** */

  pushExperienceArray(college: string, designation: string, from: string, to: string, description: string) {    
    this.objSCreateProfileService.arrExperience.push(new mExperience(0, 0, college, designation, new Date(from), new Date(to), description));
    
  }

  removeExperience(index: number) {
    this.objSCreateProfileService.arrExperience.splice(index, 1);
  }

  onExperienceNext() {
      this.objSCreateProfileService.saveExperience();
    }

  /********************************************End Step Two**************************************** */

  /********************************************Start Step Three**************************************** */

  pushExpertiseArray(expertise: string, expertiseDescription: string) {
    if(this.objSCreateProfileService.arrExpertise.length <= 15){
      this.objSCreateProfileService.arrExpertise.push(new mExpertise(0, 0, expertise, expertiseDescription));
    }
    else{
      alert('Enter Only 15 Records');
    }
  }

  removeExpertise(index: number) {
    this.objSCreateProfileService.arrExpertise.splice(index, 1);
  }

  onExpertiseNext() {
      this.objSCreateProfileService.saveExpertise();
    }

  /********************************************End Step Three******************************************/

  /********************************************Start Step Four****************************************/

  pushMembershipArray(membership: string, membershipDescription: string) {
    if(this.objSCreateProfileService.arrMembership.length <= 15){
    this.objSCreateProfileService.arrMembership.push(new mMembership(0, 0, membership, membershipDescription));
  }
  else{
    alert('Enter Only 15 Records');
  }
}

  removeMembership(index: number) {
    this.objSCreateProfileService.arrMembership.splice(index, 1);
  }

  onMembershipNext() {
      this.objSCreateProfileService.saveMembership();
    }

  /********************************************End Step Four******************************************/

  /********************************************Start Step Five****************************************/

  pushAwardArray(award: string, awardDescription: string) {
    if(this.objSCreateProfileService.arrAwards.length <= 15){
    this.objSCreateProfileService.arrAwards.push(new mAwards(0, 0, award, awardDescription));
    }
    else{
      alert('Enter Only 15 Records');
    }
  }

  removeAward(index: number) {
    this.objSCreateProfileService.arrAwards.splice(index, 1);
  }

  onAwardsNext() {
      this.objSCreateProfileService.saveAwards();
    }

  /********************************************End Step Five******************************************/

  /********************************************Start Step Six*****************************************/


  /********************************************End Step Six*******************************************/

  /********************************************Start Step Seven*****************************************/

  onOtherNext() {
  }

  /********************************************End Step Seven******************************************/
  profileSelect(researchProfileId: string) {
    this.researchProfileId = parseInt(researchProfileId);
    this.objSCreateProfileService.getResearchProfileSubject(this.researchProfileId);
  }

  checkCheckbox(event: any, researchProfileSubjectId: number) {
    let count: number = event.target.value;
    var select = this.objSCreateProfileService.arrResearchProfileSubject.filter(a => a.researchProfileSubjectId == researchProfileSubjectId);
    select.forEach(element => {
      if (count == 0 || count == null) {

        element.isActive = false;
        element.totalCount = count;
      }
      else {
        element.isActive = true;
        element.totalCount = count;
      }
    });
    console.log(this.objSCreateProfileService.arrResearchProfileSubject);
  }

  addResearch() {
    this.objSCreateProfileService.saveResearch(this.researchProfileId);
  }

  onClickPreview(){
    let mob:any = localStorage.getItem('mobile');
    let mobile:string = mob.toString().split('"')[1];
    window.open('https://dprofile.in/profile?user=' + mobile,'_blank');
    // window.open('http://localhost:4200/profile?user=' + mobile,'_blank');
  }

  getStatesByCountryId(countryId:number){
    this.objSCreateProfileService.getStatesById(countryId);
  }

  getDistrictsByStateId(stateId:number){
    this.objSCreateProfileService.getDistrictsById(stateId);
  }
}
