import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mAddTutorial, mAddTutorialTable, mTutorialMaster } from './m-tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class STutorialService {

  arrTutorialType:mTutorialMaster[];
  arrTutorialTable:mAddTutorialTable[];
  pTutorial:mAddTutorial = new mAddTutorial();

  constructor(private http: HttpClient) { }

  bindMethod(){
    this.getCountry();
    this.getTutorialTable();
  }

  getCountry(){
    this.http.get(environment.apiKey + 'mstTutorialTypes/')
    .toPromise()
    .then(res => this.arrTutorialType = res as mTutorialMaster[]);
  }
  getTutorialTable(){
    this.http.get(environment.apiKey + 'dtl_AddTutorial')
    .toPromise()
    .then(res => this.arrTutorialTable = res as mAddTutorialTable[]);
  }
  saveTutorial(){
   return this.http.post(environment.apiKey + 'dtl_AddTutorial', this.pTutorial)
  }
  deleteTutorial(tutorialId:number){
    return this.http.delete(environment.apiKey+ 'dtl_AddTutorial/' +tutorialId);
  }

}
