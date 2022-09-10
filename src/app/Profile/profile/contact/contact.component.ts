import { Component, OnInit } from '@angular/core';
import { SContactDetailsService } from './s-contact-details.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  regId:number;

  constructor(public objSContactDetailsService:SContactDetailsService) { }

  ngOnInit(): void {
    let rId:any = localStorage.getItem('requested_profile_id');
    this.regId = rId;
  }

  onSubmit(){
    this.objSContactDetailsService.pContactDetail.regId = this.regId;
    this.objSContactDetailsService.saveRecievedInquiry()
    .subscribe(
      res => {
        alert('Message Sent Succesfully.!');
      },
      err => {
        alert('Something went wrong !');
      }
    );
  }
}
