import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mAwards, mCertificate, mCountry, mCreateProfile, mDistrict, mExperience, mExpertise, mGallery, mMembership, mResearch, mResearchProfile, mResearchProfileSubject, mState, mstProfileType, TblResearchProfileSubject } from './m-create-profile.model';



@Injectable({
  providedIn: 'root'
})
export class SCreateProfileService {

  regId: any = localStorage.getItem('regId');

  pResearchProfile: mResearchProfile = new mResearchProfile();
  pResearchProfileSubject: mResearchProfileSubject = new mResearchProfileSubject();
  pDistrict: mDistrict = new mDistrict();
  pState:mState = new mState();
  pCountry:mCountry = new mCountry();
  pCreateProfile: mCreateProfile = new mCreateProfile();
  pResearch: mResearch = new mResearch();
  pCertificate: mCertificate = new mCertificate();
  pGallery: mGallery = new mGallery();
  ppmstProfileType: mstProfileType = new mstProfileType();

  arrResearchProfile: mResearchProfile[]
  arrResearchProfileSubject: mResearchProfileSubject[];
  arrDistrict: mDistrict[];
  arrState:mState[];
  arrCountry:mCountry[];
  arrCreateProfile: mCreateProfile[];
  arrExperience: mExperience[] = [];
  arrExpertise: mExpertise[] = [];
  arrMembership: mMembership[] = [];
  arrAwards: mAwards[] = [];
  arrTblResearchProfileSubject: TblResearchProfileSubject[] = [];
  arrResearch: mResearch[];
  arrCertificate: mCertificate[];
  arrGallery: mGallery[];
  arrmstProfileType: mstProfileType[];


  constructor(private http: HttpClient) { }

  bindDropdowns() {
    this.getResearchProfile();
    this.getProfileType();
    this.getCountries();
  }

  bindDataByRegId() {
    this.getProfileByRegId();
    this.getExperienceByRegId();
    this.getExpertiseByRegId();
    this.getMembershipByRegId();
    this.getAwardsByRegId();
  }

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

  getExperienceByRegId() {
    this.http.get(environment.apiKey + 'dtl_Experience/Getdtl_ExperiencesByRegId?regId=' + this.regId)
      .toPromise()
      .then(
        (res: any) => {
          this.arrExperience = res as [];
        },
        err => { }
      );
  }

  getExpertiseByRegId() {
    this.http.get(environment.apiKey + 'dtl_Expertise/Getdtl_ExpertisesByRegId?regId=' + this.regId)
      .toPromise()
      .then(
        (res: any) => {
          this.arrExpertise = res as [];
        },
        err => { }
      );
  }

  getMembershipByRegId() {
    this.http.get(environment.apiKey + 'dtl_Membership/Getdtl_MembershipsByRegId?regId=' + this.regId)
      .toPromise()
      .then(
        (res: any) => {
          this.arrMembership = res as [];
        },
        err => { }
      );
  }

  getAwardsByRegId() {
    this.http.get(environment.apiKey + 'dtl_Awards/Getdtl_AwardsByRegId?regId=' + this.regId)
      .toPromise()
      .then(
        (res: any) => {
          this.arrAwards = res as [];
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

  getResearchProfile() {
    this.http.get(environment.apiKey + 'mstResearchProfiles')
      .toPromise()
      .then(res => this.arrResearchProfile = res as mResearchProfile[]);
  }

  getResearchProfileSubject(researchProfileId: number) {
    this.http.get(environment.apiKey + 'dtl_Research/Getdtl_Research/' + this.regId + '/' + researchProfileId)
      .toPromise()
      .then(res => {
        this.arrResearchProfileSubject = res as mResearchProfileSubject[];
        this.arrResearchProfileSubject.forEach(element => {
          if (element.isCheck == 0) {
            element.isActive = false;
          }
          else {
            element.isActive = true;
          }
        });
      });
  }

  getProfileType() {
    this.http.get(environment.apiKey + 'mstProfileTypes' )
      .toPromise()
      .then(res => this.arrmstProfileType = res as mstProfileType[]);
  }

  getDistricts() {
    this.http.get(environment.apiKey + 'mstDistricts')
      .toPromise()
      .then(res => this.arrDistrict = res as mDistrict[]);
  }

  getStates(){
    this.http.get(environment.apiKey + 'mstStates' )
    .toPromise()
    .then(
      (res:any) => {
        this.arrState = res as mState[];
      },
      err => {
        alert('Something went wrong');
      }
    );
  }

  getDistrictsById(stateId:number) {
    this.http.get(environment.apiKey + 'mstDistricts/' + stateId)
      .toPromise()
      .then(res => this.arrDistrict = res as mDistrict[]);
  }

  getStatesById(countryId:number){
    this.http.get(environment.apiKey + 'mstStates/' + countryId)
    .toPromise()
    .then(
      (res:any) => {
        this.arrState = res as mState[];
      },
      err => {
        alert('Something went wrong');
      }
    );
  }

  getCountries(){
    this.http.get(environment.apiKey + 'mstCountries')
    .toPromise()
    .then(
      (res:any) => {
        this.arrCountry = res as mCountry[];
        this.getStates();
        this.getDistricts();
      },
      err => {
        alert('Something went wrong.!');
      }
    );
  }

  saveNewProfile() {
    this.pCreateProfile.regId = this.regId;
    this.http.post(environment.apiKey + 'dtl_Profile', this.pCreateProfile)
      .subscribe(
        res => { },
        err => {
          alert('Failed..!');
        }
      );
  }

  saveExperience() {
    this.arrExperience.forEach(element => {
      element.regId = this.regId;
    });
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.arrExperience);
    this.http.post(environment.apiKey + 'dtl_Experience/' + this.regId, body, { 'headers': headers })
      .subscribe(
        res => { },
        err => {
          alert('Failed..!')
        }
      );
  }

  saveExpertise() {
    this.arrExpertise.forEach(element => {
      element.regId = this.regId;
    });
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.arrExpertise);
    this.http.post(environment.apiKey + 'dtl_Expertise/' + this.regId, body, { 'headers': headers })
      .subscribe(
        res => { },
        err => {
          alert('Failed..!')
        }
      );
  }

  saveMembership() {
    this.arrMembership.forEach(element => {
      element.regId = this.regId;
    });
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.arrMembership);
    this.http.post(environment.apiKey + 'dtl_Membership/' + this.regId, body, { 'headers': headers })
      .subscribe(
        res => { },
        err => {
          alert('Failed..!')
        }
      );
  }

  saveAwards() {
    this.arrAwards.forEach(element => {
      element.regId = this.regId;
    });
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.arrAwards);
    this.http.post(environment.apiKey + 'dtl_Awards/' + this.regId, body, { 'headers': headers })
      .subscribe(
        res => { },
        err => {
          alert('Failed..!')
        }
      );
  }

  saveResearch(researchProfileId:number) {
    this.arrTblResearchProfileSubject.splice(0);
    this.arrResearchProfileSubject.forEach(element => {
      if (element.isActive == true) {
        this.arrTblResearchProfileSubject.push(new TblResearchProfileSubject(0, this.regId, element.researchProfileSubjectId, element.totalCount))
      }
    });
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.arrTblResearchProfileSubject);
    this.http.post(environment.apiKey + 'dtl_Research/' + this.regId + '/' + researchProfileId, body, { 'headers': headers })
      .subscribe(
        res => {
          alert('Research details added succesfully');
        },
        err => {
          alert('Something went wrong !');
        }
      );
  }

  updateProfile() {
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

  uploadResume(file: any) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post(environment.apiKey + 'dtl_Profile/UploadResume?regId=' + this.regId, formData)
  }

  uploadDocuments(file: any, flag: string) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    if (flag == "gallery") {
      return this.http.post(environment.apiKey + 'dtl_Gallery/UploadGallery?regId=' + this.regId, formData)

    }
    else if (flag == "photo") {
      return this.http.post(environment.apiKey + 'dtl_Profile/UploadProfilePhoto?regId=' + this.regId, formData)
    }
    else if (flag == "cert") {
      return this.http.post(environment.apiKey + 'dtl_Certificate/UploadCertificate?regId=' + this.regId, formData)
    }
    else {
      return this.http.post(environment.apiKey + 'dtl_Profile/UploadCollegeLogo?regId=' + this.regId, formData)
    }
    // else 
    // {
    //   return this.http.post(environment.apiKey + 'dtl_Profile/UploadResume?regId=' + this.regId , formData)
    // }

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

  deleteGallery(galleryId: number) {
    this.http.delete(environment.apiKey + 'dtl_Gallery/' + galleryId)
      .subscribe(
        res => {
          this.getGalleryByRegId();
        },
        err => {
          alert('Something went wrong !');
        }
      );
  }

}
