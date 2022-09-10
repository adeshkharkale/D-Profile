import { Component, OnInit } from '@angular/core';
import { SRegisterService } from '../s-register.service';

@Component({
  selector: 'app-subscription-plans',
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.scss']
})
export class SubscriptionPlansComponent implements OnInit {

  expiry:Date;

  selected:number=1

  constructor(public objSRegisterService:SRegisterService) { }

  ngOnInit(): void {
    this.objSRegisterService.getSubscriptionPackages();
  }

  makePayment(){
    let subscriptionId:number = this.selected;  
    this.objSRegisterService.saveSubscription(subscriptionId);
  }
}
