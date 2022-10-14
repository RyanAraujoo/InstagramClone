import { Injectable } from '@angular/core';
import { Methods} from '../../models/methodsService.model';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class DatabaseFirebaseService implements Methods {

constructor() {}

  getUser(user: string, pass: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user, pass)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential)
        // ...
      })
      .catch((error) => {
        console.log(error)
      });
  }
  setUser(data: string, name: string, user: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data, password)
      .then((userCredential) => {
        // Signed in
  const db = getDatabase()
  set(ref(db, `users/${(btoa(data))}`), {
    username: name,
    email: data,
    user: user
  });
        console.log(userCredential)
        // ...
      })
      .catch((error) => {
        console.log(error)

       })
    }
  }
