import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DProfile';
  constructor(private titleService: Title,
    private meta : Meta,
   ){}

    ngOnInit(){
      // this.titleService.getTitle(); 
     

    }
}
