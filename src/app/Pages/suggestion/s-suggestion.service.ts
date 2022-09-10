import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mSuggestion } from './m-suggestion.model';

@Injectable({
  providedIn: 'root'
})
export class SSuggestionService {

  pSuggestion:mSuggestion = new mSuggestion();

  constructor(private http:HttpClient) { }

  saveSuggestion(regId:number){
    this.pSuggestion.regId = regId;
    return this.http.post(environment.apiKey+ 'dtl_Suggestion', this.pSuggestion);
  }
}
