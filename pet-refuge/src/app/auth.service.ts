// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { User } from './user.model';

// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { AngularFireAuth } from '@angular/fire/auth';
// import firebase from 'firebase/app';
// import { switchMap } from 'rxjs/operators';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//     user$: Observable<User>;

//     constructor (public auth: AngularFireAuth, private afs: AngularFirestore) {
//       this.user$ = this.auth.authState.pipe(
//         switchMap(user => {
//           // Logged in
//           if (user) {
//             return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
//           } else {
//             // Logged out
//             return of(null);
//           }
//         })
//       );
//     }

//     async googleSignin () {
//       const credential = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
//       console.log(credential);
//       return this.updateUserData(credential.user);
//     }

//     private updateUserData (user) {
//       // Sets user data to firestore on login
//       const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

//       const data = {
//         uid: user.uid,
//         email: user.email,
//         displayName: user.displayName,
//         photoURL: user.photoURL
//       };
//       console.log(data);
//       return userRef.set(data, { merge: true });
//     }

//     signOut () {
//       this.auth.signOut();
//     }
// }
