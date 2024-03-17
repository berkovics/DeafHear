import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:5284/api/Users/"
  private userSub = new Subject()

  constructor(private fireAuth:AngularFireAuth, private http:HttpClient) {
    this.loadUser()
  }

  getAll(){
    return this.userSub
  }

  private loadUser(){
    this.http.get(this.url).subscribe(
      (res) => this.userSub.next(res)
    )
  }
  
  belepes(email:string, password:string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  register(email:string, password:string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
  }

  postUser(body:any){
    this.http.post(this.url, body).forEach(
      () => this.loadUser()
    )
  }

  putUser(body:any){
    this.http.put(this.url+body.id, body).forEach(
      () => this.loadUser()
    )
  }

  deleteUser(body:any){
    this.fireAuth.currentUser.then((user)=>{
      if(user != null) {
        user.delete().then(()=>{
          Swal.fire({
            icon: "success",
            title: "Felhasználói fiók törölve."
          })
        })
      } else {
        Swal.fire({
          icon: "warning",
          title: "Nem vagy belépve!"
        })
      }
    })

    this.http.delete(this.url+body.id).forEach(
      () => this.loadUser()
    )
  }

  logout() {
    return this.fireAuth.signOut()
  }

  forgotPassword(email:string) {
    return this.fireAuth.sendPasswordResetEmail(email)
  }

  signInGoogle(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider)
  } 
}
