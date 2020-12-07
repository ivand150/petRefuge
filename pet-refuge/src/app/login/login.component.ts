import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor (public auth: AngularFireAuth) {
  }

  login () {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout () {
    this.auth.signOut();
  }
}
