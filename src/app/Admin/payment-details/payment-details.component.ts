import { Component, OnInit } from '@angular/core';
import { SPaymentDetailsService } from './s-payment-details.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public objSPaymentDetailsService:SPaymentDetailsService) { }

  ngOnInit(): void {
    this.objSPaymentDetailsService.getSubscriberPayments();
  }

}
