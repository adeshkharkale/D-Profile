import { NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import { Component, OnInit } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SEventService } from '../s-event.service';

@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.scss'],
  
})
export class CreateNewEventComponent implements OnInit {

  regId: number;
  
    // public date: moment.Moment;
    public showSpinners = true;
    public showSeconds = true;
    public enableMeridian = true;
    // public minDate: moment.Moment;
    // public maxDate: moment.Moment;
    public stepHour = 1;
    public stepMinute = 1;
    public stepSecond = 1;

  constructor(public objSEventService:SEventService) {
    let rId:any = localStorage.getItem('regId');
    this.regId = rId;
   }

  ngOnInit(): void {
  }

  clickSaveEventDetails(){
    if (this.objSEventService.pEvent.eventId == 0) {
      this.objSEventService.saveEventDetails(this.regId);
    }
  }
}
