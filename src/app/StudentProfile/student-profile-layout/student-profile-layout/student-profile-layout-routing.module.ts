import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileLayoutComponent } from '../student-profile-layout.component';

const routes: Routes = [
  {
    path: '',
    component: StudentProfileLayoutComponent,
    data: {
      title: 'StudentProfile',
    },
    children: [ ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentProfileLayoutRoutingModule { }
