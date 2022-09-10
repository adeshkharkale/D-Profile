import { Component, OnInit } from '@angular/core';
import { SReceivedTicketsService } from './s-received-tickets.service';

@Component({
  selector: 'app-received-tickets',
  templateUrl: './received-tickets.component.html',
  styleUrls: ['./received-tickets.component.scss']
})
export class ReceivedTicketsComponent implements OnInit {

  constructor(public objSReceivedTicketsService:SReceivedTicketsService) { }

  ngOnInit(): void {
    this.objSReceivedTicketsService.getHelpReport();
  }

}
