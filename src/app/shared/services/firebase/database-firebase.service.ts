import { Injectable } from '@angular/core';
import { Methods } from '../../models/methodsService.model';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getDatabase,
  onValue,
  ref as refDatabase,
  set,
} from 'firebase/database';
import { Router } from '@angular/router';
import {
  getDownloadURL,
  getStorage,
  ref as refStorage,
} from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class DatabaseFirebaseService implements Methods {
  idToken?: string;
  auth: Auth = getAuth();
  array: Array<any> = [];
  publicationsTime?: Promise<any> = new Promise<any>((resolve, reject) => {});
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
          this.idToken = idToken;
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
        const db = getDatabase();
        set(refDatabase(db, `users/${btoa(data)}`), {
          username: name,
          email: data,
          user: user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async consultPublication() {
    try {
       this.consultPostPublications()
      try {
         this.consultUrlPublications().then(() => {
          console.log(this.array)
         })
         try {
           this.consultUserPublications()
          return this.array
        } catch (error) {
          return 'Não conseguimos verificar o seu usuário! Volte mais tarde!'
        }
      } catch (error) {
        return 'Erro com o uploud de imagens! Volte mais tarde!'
      }
    } catch (error) {
      return 'Não foi possível acessar as publicações! Volte mais tarde!'
    }
  }

  consultPostPublications() {
    let publicacao
    const starCountRef = refDatabase(getDatabase(), `posts`)
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        publicacao = childSnapshot.val()
        publicacao.key = childSnapshot.key
        this.array.push(publicacao)
      });
    }, {
      onlyOnce: true
    });
  }

 async consultUrlPublications() {
  for (let  child of this.array) {
     await this.getURL(child)
  }

  }

  getURL(child: any) {
      getDownloadURL(
        refStorage(getStorage(), `assets/${child.key}`)
      ).then((urlDowloadKey: string) => {
          child.url = urlDowloadKey
      })
    }

    consultUserPublications() {
      onAuthStateChanged(getAuth(), (user: any) => {
        if (user) {
          let startCountRef = refDatabase(
            getDatabase(),
            `users/${btoa(user.email)}`
          )
          onValue(startCountRef, (snapshot) => {
            this.array = this.array.map((ArrayKeysUrlChild) => {
            ArrayKeysUrlChild.username = snapshot.val().username
            });
          },{
            onlyOnce: true
          });
        }
      });
    }

  }




