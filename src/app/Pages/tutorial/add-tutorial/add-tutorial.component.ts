import { Component, OnInit } from '@angular/core';
import { STutorialService } from '../s-tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.scss']
})
export class AddTutorialComponent implements OnInit {

  constructor(public objSTutorialService: STutorialService) { }

  ngOnInit(): void {
    this.objSTutorialService.bindMethod();
  }

  onSubmit(){
    this.objSTutorialService.saveTutorial()
    .subscribe(
      res => { 
        this.objSTutorialService.getTutorialTable();
      },
      err => {
        alert('Failed..!');
      }
    );
  }

}
