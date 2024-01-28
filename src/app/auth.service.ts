import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth) { }
  
  belepes(email:any, password:any) {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  register(email:any, password:any) {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  loguot() {
    return this.fireAuth.signOut()
  }

  forgotPassword(email:any) {
    return this.fireAuth.sendPasswordResetEmail(email)
  }
}
