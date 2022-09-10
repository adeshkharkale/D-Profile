import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Auth/auth.guard';
import { ActiveUsersComponent } from '../active-users/active-users.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { FeedbackReportComponent } from '../feedback-report/feedback-report.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';
import { ReceivedTicketsComponent } from '../received-tickets/received-tickets.component';
import { RegisteredUsersComponent } from '../registered-users/registered-users.component';
import { SellReportComponent } from '../sell-report/sell-report.component';
import { SuggestionReportComponent } from '../suggestion-report/suggestion-report.component';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: 'admin-home',
      component: AdminHomeComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'active_users',
      component: ActiveUsersComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'reg-users',
      component: RegisteredUsersComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'subscriber_payments',
      component: PaymentDetailsComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'suggestion_report',
      component: SuggestionReportComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'feedback_report',
      component: FeedbackReportComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'sell_report',
      component: SellReportComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'ticket-help',
      component: ReceivedTicketsComponent,
      canActivate:[AuthGuard]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
