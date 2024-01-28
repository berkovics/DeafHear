import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
 
  email:any = ""

  constructor(private auth:AuthService, private router:Router) {}
 
  forgot(){
    this.auth.forgotPassword(this.email).then(
      () => {
        this.router.navigate(['/varify-email'])
      }, err => {
        alert("Valami elromlott")
      }
    )
    this.email = ""
  }
}
