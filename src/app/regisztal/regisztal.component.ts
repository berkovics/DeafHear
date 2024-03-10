import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be az email címet"
      })
      return
    }

    if (this.password === "") {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be a jelszót"
      })
      return
    }

    if (this.name === "") {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be a Név"
      })
      return
    }

    this.auth.register(this.email, this.password).then(
      (res:any) => {
        Swal.fire({
          icon: "success",
          title: "Sikeres regisztráció"
        })
        this.router.navigate(['/belepes'])
      }, (err:any) => {
        Swal.fire({
          icon: "error",
          title: err.message
        })
        this.router.navigate(['/regisztal'])
      }
    )

    this.name = ""
    this.email = ""
    this.password = ""
  }
}
