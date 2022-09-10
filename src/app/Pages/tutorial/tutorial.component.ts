import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { STutorialService } from './s-tutorial.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  constructor(public objSTutorialService:STutorialService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.objSTutorialService.bindMethod();
  }
  
  openAddTutorialPopup(){
    this.dialog.open(AddTutorialComponent);
  }

  removeTutorials(tutorialId:number){
    this.objSTutorialService.deleteTutorial(tutorialId)
    .subscribe(
      res => {
        this.objSTutorialService.getTutorialTable();
      },
      err => {
        alert('Failed');
      }
    );
  }

}
