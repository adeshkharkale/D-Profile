export class mSubscriptionPackage {
    subscriptionId:number;
    package:string='';
    validity:number=0;
    amount:number=0;
}

export class mDtlSubscriberPayment{
    paymentId:number=0;
    regId:number=0;
    subscriptionId:number=0;
    razorPaymentId:string='';
    paymentDate:Date;
}

export class mPaymentHistory{
    regName:string='';
    mobileNo:string='';
    emailId:string='';
    package:string='';
    subscriptionId:number=0;
    offerRate:number=0;
    razorPaymentId:string='';
    paymentDate:Date;
}
