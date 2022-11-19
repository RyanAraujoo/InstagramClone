import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase,
  ref as refDatabase,
  push,
  set,
  onChildAdded,
  onValue,
} from 'firebase/database';

import {
  getStorage,
  ref as refStorage,
  uploadBytesResumable,
} from 'firebase/storage';
import { ProgressBarService } from './progress/progressBar.service';

@Injectable({
  providedIn: 'root',
})
export class DatabasePublicationsService {
  auth = getAuth();
  private currentUser!: string;

  constructor(private progressService: ProgressBarService) {
    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        this.currentUser = user.email;
      }
    });
  }

  addNewPublication(title: string, asset: string) {
    const postListRef = refDatabase(
      getDatabase(),
      `/posts`
    );
    const newPostRef = push(postListRef);
    set(newPostRef, { title });
    this.prepareImageAsset(newPostRef.key, asset);
  }

  prepareImageAsset(key: any, asset: any): any {
    const storageRef = refStorage(getStorage(), `assets/${key}`);
    const uploadTask = uploadBytesResumable(storageRef, asset);
    uploadTask.on('state_changed', (snapshot) => {
      this.progressService._PercentageUploud =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    });
  }
}
