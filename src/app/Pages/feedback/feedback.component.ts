import { Component, OnInit } from '@angular/core';
import { SFeedbackService } from './s-feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  regId:number=0;
  regName:string;
  mobile:string
  feedbackId:number=0;

  constructor(public objSFeedbackService:SFeedbackService) {
    let rId:any = localStorage.getItem('regId');
    this.regId = rId;
   }

  ngOnInit(): void {
    let name:any = localStorage.getItem('regName');
    this.regName = name.toString().split('"')[1];

    let mob:any = localStorage.getItem('mobile');
    this.mobile = mob.toString().split('"')[1];

    this.objSFeedbackService.getFeedbackOptions();
  }

  saveFeedback(productRateId:string,serviceRateId:string){
    this.objSFeedbackService.pDtlFeedback.productRateId = parseInt(productRateId);
    this.objSFeedbackService.pDtlFeedback.serviceRateId = parseInt(serviceRateId);
    console.log(JSON.stringify(this.objSFeedbackService.pDtlFeedback));
    if (this.objSFeedbackService.pDtlFeedback.feedbackId == 0) {
      this.objSFeedbackService.saveFeedback(this.regId).subscribe(
        (res: any) => {
          this.feedbackId = res.feedbackId;
          alert('Thanks For Your Valuable Feedback.😊')
        },
        err => {
          alert('Something went wrong !');
        }
      )
    }
  }

}
