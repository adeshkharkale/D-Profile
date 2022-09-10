import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mSuggestionReport } from './m-suggestion-report.model';

@Injectable({
  providedIn: 'root'
})
export class SSuggestionReportService {

  pSuggestionReport:mSuggestionReport = new mSuggestionReport();

  arrSuggestionReport:mSuggestionReport[];

  constructor(private http:HttpClient) { }

  getSuggestionReport(){
    this.http.get(environment.apiKey + 'dtl_Suggestion/GetSuggestionReport')
    .toPromise()
    .then(
      res => {
        this.arrSuggestionReport = res as mSuggestionReport[];
      },
      err => {
        alert('Failed');
      }
    );
  }
}
