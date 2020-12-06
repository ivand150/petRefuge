import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container class='login__container' *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <div *ngIf="auth.user$ | async as user">
        {{user.name}}
      </div>
      <button (click)="auth.logout({ returnTo: document.location.origin })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
  styles: ['ng-container {display: flex; flex-direction: row;}']
})
export class AuthButtonComponent {
  constructor (@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}
