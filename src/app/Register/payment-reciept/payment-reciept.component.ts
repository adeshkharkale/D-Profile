import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SRegisterService } from '../s-register.service';

@Component({
  selector: 'app-payment-reciept',
  templateUrl: './payment-reciept.component.html',
  styleUrls: ['./payment-reciept.component.scss']
})
export class PaymentRecieptComponent implements OnInit {

  buyerName:string;
  buyerMobile:string;
  buyerEmail:string;
  amount:number;
  date:Date;
  subscriptionPackage:string;
  paymentId:string;

  constructor(private route: ActivatedRoute, public objSRegisterService:SRegisterService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.paymentId = params['paymentId'];
    });

    this.objSRegisterService.updateSubscription(this.paymentId)
    .subscribe(
      (res:any) => {
        alert(JSON.stringify(res));
        this.buyerName = res.regName;
        this.buyerMobile = res.mobileNo;
        this.buyerEmail = res. emailId;
        this.amount = res.offerRate;
        this.subscriptionPackage = res.package;
        this.date = new Date();
      },
      err => {
      }
    );
  }
}
