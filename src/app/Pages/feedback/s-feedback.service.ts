import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mDtlFeedback, mFeedback } from './m-feedback.model';

@Injectable({
  providedIn: 'root'
})
export class SFeedbackService {

  pFeedback:mFeedback = new mFeedback();
  pDtlFeedback:mDtlFeedback = new mDtlFeedback();

  arrFeedback:mFeedback[];

  constructor(private http:HttpClient) { }

  getFeedbackOptions(){
    this.http.get(environment.apiKey + 'mstFeedbacks')
    .toPromise()
    .then(res => this.arrFeedback = res as mFeedback[]);
  }

  saveFeedback(regId:number){
    this.pDtlFeedback.regId = regId;
    return this.http.post(environment.apiKey + 'dtl_Feedback', this.pDtlFeedback);
  }
}
