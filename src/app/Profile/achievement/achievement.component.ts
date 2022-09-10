import { Component, OnInit } from '@angular/core';
import { SProfileService } from '../s-profile.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor(public objSProfileService:SProfileService) { }

  ngOnInit(): void {
  }

}
