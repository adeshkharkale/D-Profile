import { Component, OnInit } from '@angular/core';
import { SHelpService } from './s-help.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  RegId: any;
  ticketId: number = 0;
  regName:string;
  mobile:string;

  constructor(public objSHelpService:SHelpService) {
    this.RegId = localStorage.getItem('regId');
   }

  ngOnInit(): void {
    let name:any = localStorage.getItem('regName');
    this.regName = name.toString().split('"')[1];

    let mob:any = localStorage.getItem('mobile');
    this.mobile = mob.toString().split('"')[1]
  }

  saveHelpDeskQuery(){
    if (this.objSHelpService.pHelp.ticketId == 0) {
      this.objSHelpService.saveQueryDetails(this.RegId)
        .subscribe(
          (res: any) => {
            this.ticketId = res.ticketId;
            alert('Your Ticket Has Been Generated Succesfully. Our Team Will Contact You Soon.')
          },
          err => {
            alert('Something went wrong !');
          }
        )
    }
  }
}
