import { Component, OnInit } from '@angular/core';
import { SSuggestionReportService } from './s-suggestion-report.service';

@Component({
  selector: 'app-suggestion-report',
  templateUrl: './suggestion-report.component.html',
  styleUrls: ['./suggestion-report.component.scss']
})
export class SuggestionReportComponent implements OnInit {

  constructor(public objSSuggestionReportService:SSuggestionReportService) { }

  ngOnInit(): void {
    this.objSSuggestionReportService.getSuggestionReport();
  }

}
