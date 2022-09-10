import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentService } from '../payment.service';
import { SRegisterService } from '../s-register.service';
import { SubscriptionPlansComponent } from '../subscription-plans/subscription-plans.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public objSRegisterService: SRegisterService, public dialog: MatDialog,
    private objPaymentService: PaymentService) { }

  ngOnInit(): void {
  }

  save(check:any,pass1:string){

    if(this.objSRegisterService.pUserData.password == pass1){
      if(check == true)
    {
      try{
        localStorage.removeItem('buyerRegId');
      }
      catch{
        
      } 
      this.objSRegisterService.registerUser()
      .subscribe(
        (res:any) => {
          localStorage.setItem('buyerRegId',res);
          this.dialog.open(SubscriptionPlansComponent);
        },
        err => {
          alert('Something Went Wrong');
        }
      );
    }
    else{
      alert('Please read and accept privacy policies first');
    }
    }
    else{
      alert('Password Missmatch Found');
    }
  }
}
