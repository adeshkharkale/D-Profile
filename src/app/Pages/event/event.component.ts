import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewEventComponent } from './create-new-event/create-new-event.component';
import { SEventService } from './s-event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  regId:any = localStorage.getItem('regId');

  constructor(public objSEventService:SEventService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.objSEventService.getEventsByRegId(this.regId);
  }

  openCreateEventPopup(){
    this.dialog.open(CreateNewEventComponent);
  }

  removeEvent(eventId:number){
    this.objSEventService.deleteEvent(eventId)
    .subscribe(
      res => {
        this.objSEventService.getEventsByRegId(this.regId);
      },
      err => {
        alert('Failed');
      }
    );
  }
}
