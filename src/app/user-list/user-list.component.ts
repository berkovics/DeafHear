import { Component } from '@angular/core';
import { RegisztalComponent } from '../regisztal/regisztal.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  oszlopok=["Név", "Tajszám", "Lakcím", "Email"]
  user:any

  constructor(private auth:AuthService, private reg:RegisztalComponent){
    this.auth.getAll().subscribe(
      (res) => this.user = res
    )
  }

  putUser(body:any){
    this.auth.putUser(body)
  }

  deleteUser(body:any){
    this.auth.deleteUser(body)
  }
}
