import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regisztal',
  templateUrl: './regisztal.component.html',
  styleUrls: ['./regisztal.component.css']
})
export class RegisztalComponent {

  email:string = ""
  password:string = ""

  constructor(private auth:AuthService, private router:Router) {}
 
  register() {
    if (this.email === "") {
      alert("Kérem írja be az email címet")
      return
    }

    if (this.password === "") {
      alert("Kérem írja be a jelszót")
      return
    }

    this.auth.register(this.email, this.password).then(
      (res:any) => {
        alert("Sikeres regisztráció")
        this.router.navigate(['/belepes'])
        this.sendemailforvarification(res.user)
      }, (err:any) => {
        alert(err.message)
        this.router.navigate(['/regisztal'])
      }
    )

    this.email = ""
    this.password = ""
  }

  sendemailforvarification(user:any) {
    return user.sendEmailVerification().then(
      (res:any) => {
        this.router.navigate(['/varify-email'])
      }, (err:any) => {
        alert("Valami elromlott. Nem tud levelet küldeni az e-mail címére.")
      }
    )
  }
}
