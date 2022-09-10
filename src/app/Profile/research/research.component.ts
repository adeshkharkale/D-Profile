import { Component, OnInit } from '@angular/core';
import { SProfileService } from '../s-profile.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor(public objSProfileService:SProfileService) { }

  ngOnInit(): void {
  }

}
