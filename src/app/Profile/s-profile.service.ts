import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { mAwards, mCertificate, mCreateProfile, mExperience, mExpertise, mGallery, mMembership, TableResearchForProfile, TblResearchProfileSubject } from '../Pages/create-profile/m-create-profile.model';
import { mEvent } from '../Pages/event/m-event.model';

@Injectable({
  providedIn: 'root'
})
export class SProfileService {

  regId:any = localStorage.getItem('regId');

  constructor(private http:HttpClient) { }

  pCreateProfile:mCreateProfile = new mCreateProfile();

  arrExperience:mExperience[] = [];
  arrExpertise:mExpertise[] = [];
  arrmMembership:mMembership[] = [];
  arrAwards:mAwards[] = [];
  arrCertificate:mCertificate[];
  arrGallery:mGallery[];
  arrTableResearchForProfile:TableResearchForProfile[] = [];
  arrEvent:mEvent[];
  
  

  getProfile(mobile:string){
    return this.http.get(environment.apiKey + 'dtl_Profile/Getdtl_ProfilesByMobile?mobile='+mobile)
    
  }

  bindProfile(regId:number){
    this.getExperience(regId);
    this.getExpertise(regId);
    this.getMembership(regId);
    this.getAwards(regId);
    this.getResearch(regId);
    this.getCertificate(regId);
    this.getGallery(regId);
    this.getEventsByRegId(regId);
  }

  getExperience(regId:number){
    this.http.get(environment.apiKey + 'dtl_Experience/Getdtl_ExperiencesByRegId?regId=' + regId)
    .toPromise()
    .then(res => {
      this.arrExperience = res as [];
    });
  }

  getExpertise(regId:number){
    this.http.get(environment.apiKey + 'dtl_Expertise/Getdtl_ExpertisesByRegId?regId=' + regId)
    .toPromise()
    .then(res => {
      this.arrExpertise = res as [];
    });
  }

  getMembership(regId:number){
    this.http.get(environment.apiKey + 'dtl_Membership/Getdtl_MembershipsByRegId?regId=' + regId)
    .toPromise()
    .then(res => {
      this.arrmMembership = res as [];
    });
  }

  getAwards(regId:number){
    this.http.get(environment.apiKey + 'dtl_Awards/Getdtl_AwardsByRegId?regId=' + regId)
    .toPromise()
    .then(res => {
      this.arrAwards = res as [];
    });
  }

  getResearch(regId:number){
    this.http.get(environment.apiKey + 'dtl_Research/Getdtl_ResearchByRegId/' + regId)
    .toPromise()
    .then(res => {
      this.arrTableResearchForProfile = res as [];
      console.log(this.arrTableResearchForProfile);
    });
  }

  getCertificate(regId:number){
    this.http.get(environment.apiKey + 'dtl_Certificate/'+regId)
    .toPromise()
    .then(res => {
      this.arrCertificate = res as mCertificate[];
    });
  }

  getGallery(regId:number){
    this.http.get(environment.apiKey + 'dtl_Gallery/'+regId)
    .toPromise()
    .then(res => {
      this.arrGallery = res as mGallery[];
    });
  }

  getEventsByRegId(regId:number){
    this.http.get(environment.apiKey + 'dtl_Event/' + regId)
    .toPromise()
    .then(res => this.arrEvent = res as mEvent[]);
  }
}
