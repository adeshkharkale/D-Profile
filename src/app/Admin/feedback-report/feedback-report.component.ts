import { Component, OnInit } from '@angular/core';
import { SFeedbackReportService } from './s-feedback-report.service';

@Component({
  selector: 'app-feedback-report',
  templateUrl: './feedback-report.component.html',
  styleUrls: ['./feedback-report.component.scss']
})
export class FeedbackReportComponent implements OnInit {

  constructor(public objSFeedbackReportService:SFeedbackReportService) { }

  ngOnInit(): void {
    this.objSFeedbackReportService.getFeedbackReport();
  }

}
