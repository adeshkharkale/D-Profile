import { Component, OnInit } from '@angular/core';
import { SSuggestionService } from './s-suggestion.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  regId:number=0;
  suggestionId: number = 0;

  regName:string;
  mobile:string;

  constructor(public objSSuggestionService:SSuggestionService) { 
    let rId:any = localStorage.getItem('regId');
    this.regId = rId;
   }

  ngOnInit(): void {
    let name:any = localStorage.getItem('regName');
    this.regName = name.toString().split('"')[1];

    let mob:any = localStorage.getItem('mobile');
    this.mobile = mob.toString().split('"')[1];
  }

  saveSuggestion(){
    if (this.objSSuggestionService.pSuggestion.suggestionId == 0) {
      this.objSSuggestionService.saveSuggestion(this.regId)
        .subscribe(
          (res: any) => {
            this.suggestionId = res.suggestionId;
            alert('Thanks For Your Valuable Suggestions.😊')
          },
          err => {
            alert('Something went wrong !');
          }
        )
    }
  }
}
