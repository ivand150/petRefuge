import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  template: `
    <div *ngIf="auth.user | async as user; else showLogin">
      <h1>Hello {{ user.displayName }}!</h1>
      <button (click)="logout()">Logout</button>
    </div>
    <ng-template #showLogin>
      <button (click)="login()">Login with Google</button>
    </ng-template>
  `
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
