import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Methods } from '../../models/methodsService.model';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DatabaseFirebaseService implements Methods {
  idToken?: string
  auth: Auth = getAuth();
  constructor(private router: Router) {}

  LogoutUser() {
    this.auth.signOut().then(() => {
      localStorage.removeItem('idToken');
      this.router.navigateByUrl('');
    });
  }

  getUser(user: string, pass: string) {
    signInWithEmailAndPassword(this.auth, user, pass)
      .then(() => {
        return this.auth.currentUser?.getIdToken().then((idToken: string) => {
          this.idToken = idToken
          this.router.navigateByUrl('/home');
          localStorage.setItem('idToken', idToken);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setUser(data: string, name: string, user: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data, password)
      .then((userCredential) => {
        // Signed in
        const db = getDatabase();
        set(ref(db, `users/${btoa(data)}`), {
          username: name,
          email: data,
          user: user,
        });
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
