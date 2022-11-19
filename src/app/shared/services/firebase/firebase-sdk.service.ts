import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Injectable({
  providedIn: 'root',
})
export class FirebaseSDKService {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyB5BkE-BIE-C4AA7ahlAmZefBuVoPbdjrw',
      authDomain: 'instagramv4-676e6.firebaseapp.com',
      databaseURL: 'https://instagramv4-676e6-default-rtdb.firebaseio.com',
      projectId: 'instagramv4-676e6',
      storageBucket: 'instagramv4-676e6.appspot.com',
      messagingSenderId: '185522525031',
      appId: '1:185522525031:web:7affc976aa343f4c6c95c2',
      measurementId: 'G-J7KKFPL06N',
    };
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }
}
