import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';

import { ProfileLayoutRoutingModule } from './profile-layout-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileLayoutRoutingModule,
    MatDialogModule
  ]
})
export class ProfileLayoutModule { }
