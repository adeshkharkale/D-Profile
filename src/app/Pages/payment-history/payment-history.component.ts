import { Component, OnInit } from '@angular/core';
import { SRegisterService } from 'src/app/Register/s-register.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {

  constructor(public objSRegisterService:SRegisterService) { }

  ngOnInit() {
    this.objSRegisterService.getReceiptByRegId();
  }

}
