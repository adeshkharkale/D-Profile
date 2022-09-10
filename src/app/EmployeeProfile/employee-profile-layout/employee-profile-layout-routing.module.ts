import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileLayoutComponent } from './employee-profile-layout.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeProfileLayoutComponent,
    data: {
      title: 'EmployeeProfile',
    },
    children: [ ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeProfileLayoutRoutingModule { }
