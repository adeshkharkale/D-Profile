import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mFeedbackReport } from './m-feedback-report.model';

@Injectable({
  providedIn: 'root'
})
export class SFeedbackReportService {

  pFeedbackReport:mFeedbackReport = new mFeedbackReport();

  arrFeedbackReport:mFeedbackReport[];

  constructor(private http:HttpClient) { }

  getFeedbackReport(){
    this.http.get(environment.apiKey + 'dtl_Feedback/GetFeedbackReport')
    .toPromise()
    .then(
      (res:any) => {
        this.arrFeedbackReport = res as mFeedbackReport[];
      },
      err => {
        alert('Failed');
      }
    );
  }
}
