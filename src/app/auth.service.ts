import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth) { }
  
  belepes(email:string, password:string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  register(email:string, password:string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
  }

  loguot() {
    return this.fireAuth.signOut()
  }

  forgotPassword(email:string) {
    return this.fireAuth.sendPasswordResetEmail(email)
  }
}
