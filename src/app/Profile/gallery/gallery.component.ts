import { Component, OnInit } from '@angular/core';
import { SProfileService } from '../s-profile.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public objSProfileService:SProfileService) { }

  ngOnInit(): void {
  }

}
