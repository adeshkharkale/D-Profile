import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './Login/login-layout/login-layout.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileLayoutComponent } from './Profile/profile-layout/profile-layout.component';
import { PaymentRecieptComponent } from './Register/payment-reciept/payment-reciept.component';
import { RegisterComponent } from './Register/register/register.component';
import { StudentProfileLayoutComponent } from './StudentProfile/student-profile-layout/student-profile-layout.component';
import { EmployeeProfileLayoutComponent } from './EmployeeProfile/employee-profile-layout/employee-profile-layout.component';

const routes: Routes = [{
  path: '',
  redirectTo: "/",
  pathMatch: 'full'
},
{
  path: "",
  component: LoginLayoutComponent
},
{
  path: "register",
  component: RegisterComponent
},
{
  path: "logout",
  component: LogoutComponent
},
{
  path: "payment-receipt",
  component: PaymentRecieptComponent
},
{
  path: "profile",
  component: ProfileLayoutComponent,
 
},
{
  path: "stud-profile",
  component: StudentProfileLayoutComponent,
 
},
{
  path: "emp-profile",
  component: EmployeeProfileLayoutComponent,
 
},
{ path: '', loadChildren: () => import('./PageLayout/page-layout/page-layout.module').then(m => m.PageLayoutModule) },
{ path: '', loadChildren: () => import('./Profile/profile-layout/profile-layout.module').then(m => m.ProfileLayoutModule)},
{ path: '', loadChildren: () => import('./StudentProfile/student-profile-layout/student-profile-layout/student-profile-layout.module').then(m => m.StudentProfileLayoutModule)},
{ path: '', loadChildren: () => import('./EmployeeProfile/employee-profile-layout/employee-profile-layout.module').then(m => m.EmployeeProfileLayoutModule)},
{ path: '', loadChildren: () => import('./Admin/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
