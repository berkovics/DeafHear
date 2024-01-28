import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-belepes',
  templateUrl: './belepes.component.html',
  styleUrls: ['./belepes.component.css']
})
export class BelepesComponent {
 
  email:any = ""
  password:any = ""

  constructor(private auth:AuthService, private router:Router) {}
 
  login() {
    if (this.email == "") {
      alert("Kérem írja be az email címet")
      return
    }

    if (this.password == "") {
      alert("Kérem írja be a jelszót")
      return
    }

    this.auth.belepes(this.email, this.password).then(
      res => {
        localStorage.setItem('token', 'true')
        if (res.user?.emailVerified == true) {
          this.router.navigate(['/welcome'])
        } else {
          this.router.navigate(['/varify-email'])
        }
      }, err => {
        alert(err.message)
        this.router.navigate(['/belepes'])
      }
    )

    this.email = ""
    this.password = ""
  }
}
