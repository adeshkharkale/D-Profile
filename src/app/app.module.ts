import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { NgxImageCompressService } from 'ngx-image-compress';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { FooterComponent } from './Login/footer/footer.component';
import { HeaderComponent } from './Login/header/header.component';
import { LoginLayoutComponent } from './Login/login-layout/login-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Register/register/register.component';
import { SubscriptionPlansComponent } from './Register/subscription-plans/subscription-plans.component';
import { MainFooterComponent } from './PageLayout/main-footer/main-footer.component';
import { MainHeaderComponent } from './PageLayout/main-header/main-header.component';
import { SideMenuComponent } from './PageLayout/side-menu/side-menu.component';
import { PageLayoutComponent } from './PageLayout/page-layout/page-layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
// import { AuthInterceptor } from './Auth/auth.interceptor';
import { CreateProfileComponent } from './Pages/create-profile/create-profile.component';
import { ProfileLayoutComponent } from './Profile/profile-layout/profile-layout.component';
import { AchievementComponent } from './Profile/achievement/achievement.component';
import { ExpertiseComponent } from './Profile/expertise/expertise.component';
import { GalleryComponent } from './Profile/gallery/gallery.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { ResearchComponent } from './Profile/research/research.component';
import { ProfileFooterComponent } from './Profile/profile-footer/profile-footer.component';
import { ShareProfilePopupComponent } from './Profile/profile/share-profile-popup/share-profile-popup.component';
import { ShareDProfileComponent } from './Pages/share-dprofile/share-dprofile.component';
import { ReferAndEarnComponent } from './Pages/refer-and-earn/refer-and-earn.component';
import { ReceivedInquiryComponent } from './Pages/received-inquiry/received-inquiry.component';
import { FeedbackComponent } from './Pages/feedback/feedback.component';
import { SuggestionComponent } from './Pages/suggestion/suggestion.component';
import { HelpComponent } from './Pages/help/help.component';
import { PaymentRecieptComponent } from './Register/payment-reciept/payment-reciept.component';
import { EventComponent } from './Pages/event/event.component';
import { CreateNewEventComponent } from './Pages/event/create-new-event/create-new-event.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ChangePasswordComponent } from './Pages/change-password/change-password.component';
import { ContactComponent } from './Profile/profile/contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentHistoryComponent } from './Pages/payment-history/payment-history.component';
import { NgTinyUrlModule } from "ng-tiny-url";
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { ActiveUsersComponent } from './Admin/active-users/active-users.component';
import { RegisteredUsersComponent } from './Admin/registered-users/registered-users.component';
import { PaymentDetailsComponent } from './Admin/payment-details/payment-details.component';
import { SellReportComponent } from './Admin/sell-report/sell-report.component';
import { FeedbackReportComponent } from './Admin/feedback-report/feedback-report.component';
import { SuggestionReportComponent } from './Admin/suggestion-report/suggestion-report.component';
import { ReceivedTicketsComponent } from './Admin/received-tickets/received-tickets.component';
import { AdminLayoutComponent } from './Admin/admin-layout/admin-layout.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { ComingSoonComponent } from './Pages/coming-soon/coming-soon.component';
import { MyQrComponent } from './Pages/my-qr/my-qr.component';
import { CreateExperincedComponent } from './Pages/create-experinced/create-experinced.component';
import { CreateFresherComponent } from './Pages/create-fresher/create-fresher.component';

import { StudentProfileComponent } from './StudentProfile/student-profile/student-profile.component';
import { StudentExpertiseComponent } from './StudentProfile/student-expertise/student-expertise.component';
import { StudentGalleryComponent } from './StudentProfile/student-gallery/student-gallery.component';
import { StudentFooterComponent } from './StudentProfile/student-footer/student-footer.component';
import { StudentProfileLayoutComponent } from './StudentProfile/student-profile-layout/student-profile-layout.component';

import { EmployeeProfileComponent } from './EmployeeProfile/employee-profile/employee-profile.component';
import { EmployeeGalleryComponent } from './EmployeeProfile/employee-gallery/employee-gallery.component';
import { EmployeeFooterComponent } from './EmployeeProfile/employee-footer/employee-footer.component';
import { EmployeeExpertiseComponent } from './EmployeeProfile/employee-expertise/employee-expertise.component';
import { EmployeeProfileLayoutComponent } from './EmployeeProfile/employee-profile-layout/employee-profile-layout.component';
import { TutorialComponent } from './Pages/tutorial/tutorial.component';
import { AddTutorialComponent } from './Pages/tutorial/add-tutorial/add-tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    LoginLayoutComponent,
    RegisterComponent,
    SubscriptionPlansComponent,
    MainFooterComponent,
    MainHeaderComponent,
    SideMenuComponent,
    PageLayoutComponent,
    DashboardComponent,
    CreateProfileComponent,
    ProfileLayoutComponent,
    AchievementComponent,
    ExpertiseComponent,
    GalleryComponent,
    ProfileComponent,
    ResearchComponent,
    ProfileFooterComponent,
    ShareProfilePopupComponent,
    ShareDProfileComponent,
    ReferAndEarnComponent,
    ReceivedInquiryComponent,
    FeedbackComponent,
    SuggestionComponent,
    HelpComponent,
    PaymentRecieptComponent,
    EventComponent,
    CreateNewEventComponent,
    ChangePasswordComponent,
    ContactComponent,
    LogoutComponent,
    PaymentHistoryComponent,
    AdminHomeComponent,
    ActiveUsersComponent,
    RegisteredUsersComponent,
    PaymentDetailsComponent,
    SellReportComponent,
    FeedbackReportComponent,
    SuggestionReportComponent,
    ReceivedTicketsComponent,
    AdminLayoutComponent,
    ComingSoonComponent,
    MyQrComponent,
    CreateExperincedComponent,
    CreateFresherComponent,
    StudentProfileComponent,
    StudentExpertiseComponent,
    StudentGalleryComponent,
    StudentFooterComponent,
    StudentProfileLayoutComponent,
    EmployeeProfileComponent,
    EmployeeGalleryComponent,
    EmployeeFooterComponent,
    EmployeeExpertiseComponent,
    EmployeeProfileLayoutComponent,
    TutorialComponent,
    AddTutorialComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    MatStepperModule,
    MatSelectModule,
    MatSliderModule,
    LoadingBarRouterModule,
    MatRadioModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    NgTinyUrlModule,
    GooglePayButtonModule,
  ],
  providers: [
    NgxImageCompressService,
    ],
  entryComponents: [SubscriptionPlansComponent, CreateNewEventComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
