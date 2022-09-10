import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Auth/auth.guard';
import { ChangePasswordComponent } from 'src/app/Pages/change-password/change-password.component';
import { ComingSoonComponent } from 'src/app/Pages/coming-soon/coming-soon.component';
import { CreateExperincedComponent } from 'src/app/Pages/create-experinced/create-experinced.component';
import { CreateFresherComponent } from 'src/app/Pages/create-fresher/create-fresher.component';
import { CreateProfileComponent } from 'src/app/Pages/create-profile/create-profile.component';
import { DashboardComponent } from 'src/app/Pages/dashboard/dashboard.component';
import { EventComponent } from 'src/app/Pages/event/event.component';
import { FeedbackComponent } from 'src/app/Pages/feedback/feedback.component';
import { HelpComponent } from 'src/app/Pages/help/help.component';
import { MyQrComponent } from 'src/app/Pages/my-qr/my-qr.component';
import { PaymentHistoryComponent } from 'src/app/Pages/payment-history/payment-history.component';
import { ReceivedInquiryComponent } from 'src/app/Pages/received-inquiry/received-inquiry.component';
import { ReferAndEarnComponent } from 'src/app/Pages/refer-and-earn/refer-and-earn.component';
import { ShareDProfileComponent } from 'src/app/Pages/share-dprofile/share-dprofile.component';
import { SuggestionComponent } from 'src/app/Pages/suggestion/suggestion.component';
import { TutorialComponent } from 'src/app/Pages/tutorial/tutorial.component';
import { PageLayoutComponent } from './page-layout.component';

const routes: Routes = [{
  path: '',
  component: PageLayoutComponent,
  children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'create_profile',
        component: CreateProfileComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'create_experienced',
        component: CreateExperincedComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'create_fresher',
        component: CreateFresherComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'refer',
        component: ReferAndEarnComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'share',
        component: ShareDProfileComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'enquiry_list',
        component: ReceivedInquiryComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'suggestion',
        component: SuggestionComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'help',
        component: HelpComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'event',
        component: EventComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'changepass',
        component: ChangePasswordComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'payhistory',
        component: PaymentHistoryComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'coming-soon',
        component: ComingSoonComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'my-qr',
        component: MyQrComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'tutorial',
        component: TutorialComponent,
        canActivate:[AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
