import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { MatMenuModule } from '@angular/material/menu';
// import { BitlyClient } from 'bitly';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    MatStepperModule,
    MatMenuModule,
    // BitlyClient
  ]
})
export class PageLayoutModule { }
