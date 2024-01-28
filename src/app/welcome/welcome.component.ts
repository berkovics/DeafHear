import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private auth:AuthService, private router:Router) {}
  
  logOut() {
    this.auth.loguot().then(
      () => {
        localStorage.removeItem('token')
        this.router.navigate(['/belepes'])
      }, err => {
        alert(err.message)
      }
    )
  }
}
