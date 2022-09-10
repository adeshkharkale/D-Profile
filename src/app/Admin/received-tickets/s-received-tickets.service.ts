import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mReceivedTickets } from './m-received-tickets.model';

@Injectable({
  providedIn: 'root'
})
export class SReceivedTicketsService {

  pReceivedTickets:mReceivedTickets = new mReceivedTickets();

  arrReceivedTickets:mReceivedTickets[];

  constructor(private http:HttpClient) { }

  getHelpReport(){
    this.http.get(environment.apiKey + 'dtl_Help/GetHelpReport')
    .toPromise()
    .then(
      (res:any) => {
        this.arrReceivedTickets = res as mReceivedTickets[];
      },
      err => {
        alert('Failed');
      }
    );
  }
}
