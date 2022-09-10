import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mEvent } from './m-event.model';

@Injectable({
  providedIn: 'root'
})
export class SEventService {

  eventId: number = 0; 

  pEvent:mEvent = new mEvent();

  arrEvent:mEvent[];

  constructor(private http:HttpClient) { }

  getEventsByRegId(regId:number){
    this.http.get(environment.apiKey + 'dtl_Event/' + regId)
    .toPromise()
    .then(res => this.arrEvent = res as mEvent[]);
  }

  saveEventDetails(regId:number){
    this.pEvent.regId = regId;
    this.http.post(environment.apiKey+ 'dtl_Event', this.pEvent)
    .subscribe(
      (res: any) => {
        this.eventId = res.eventId;
        this.getEventsByRegId(regId);
      },
      err => {
        alert('Something went wrong !');
      }
    );
  }

  deleteEvent(eventId:number){
    return this.http.delete(environment.apiKey+ 'dtl_Event/'+eventId);
  }
}
