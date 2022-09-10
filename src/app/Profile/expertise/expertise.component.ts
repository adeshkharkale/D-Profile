import { Component, OnInit } from '@angular/core';
import { SProfileService } from '../s-profile.service';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit {

  constructor(public objSProfileService:SProfileService) { }

  ngOnInit(): void {
  }

}
