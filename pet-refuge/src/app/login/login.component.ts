import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (public auth: AngularFireAuth, private router: Router) {
  }

  async login () {
    const testuser = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(testuser);
  }

  logout () {
    this.auth.signOut();
    if (this.router.url === '/user') {
      this.router.navigate(['app-main']);
    }
  }
}
