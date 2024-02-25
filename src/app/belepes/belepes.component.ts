import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-belepes',
  templateUrl: './belepes.component.html',
  styleUrls: ['./belepes.component.css']
})
export class BelepesComponent {
 
  email:string = ""
  password:string = ""

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
      (res:any) => {
        localStorage.setItem('token', 'true')
        this.router.navigate(['/home'])
        alert("Welcome")
      }, (err:any) => {
        alert(err.message)
        this.router.navigate(['/belepes'])
      }
    )

    this.email = ""
    this.password = ""
  }

  signInWithGoogle(){
    this.auth.signInGoogle().then(
      (res:any) => {
        this.router.navigate(['/home'])
        localStorage.setItem('token', JSON.stringify(res.user?.uid))
        alert("Welcome")
      }, (err:any) => {
        alert(err.message)
      }
    )
  }
}
