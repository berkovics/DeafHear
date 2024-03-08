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
  name:string = ""

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

    if (this.name === "") {
      alert("Kérem írja be a Név")
      return
    }

    this.auth.register(this.email, this.password).then(
      (res:any) => {
        alert("Sikeres regisztráció")
        this.router.navigate(['/belepes'])
      }, (err:any) => {
        alert(err.message)
        this.router.navigate(['/regisztal'])
      }
    )

    this.email = ""
    this.password = ""
  }
}
