import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mCreateProfile } from '../create-profile/m-create-profile.model';
import { mHelp } from './m-help.model';

@Injectable({
  providedIn: 'root'
})
export class SHelpService {

  pHelp:mHelp = new mHelp();

  constructor(private http:HttpClient) { }

  saveQueryDetails(RegId:number){
    this.pHelp.regId = RegId;
    return this.http.post(environment.apiKey+ 'dtl_Help', this.pHelp);
  }
}
