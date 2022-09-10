import { Component, OnInit } from '@angular/core';
import { SReceivedInquiryService } from './s-received-inquiry.service';

@Component({
  selector: 'app-received-inquiry',
  templateUrl: './received-inquiry.component.html',
  styleUrls: ['./received-inquiry.component.scss']
})
export class ReceivedInquiryComponent implements OnInit {

  regId:number=0;

  constructor(public objSReceivedInquiryService:SReceivedInquiryService) { }

  ngOnInit(): void {

    let rId:any = localStorage.getItem('regId');
    this.regId = rId;

    this.objSReceivedInquiryService.getReceivedInquiry(this.regId);
  }

}
