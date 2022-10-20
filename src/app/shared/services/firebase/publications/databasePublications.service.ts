import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, set, ref as refDatabase} from 'firebase/database';

import { getStorage, ref as refStorage,uploadBytes} from "firebase/storage";

@Injectable({
  providedIn: 'root',
})
export class DatabasePublicationsService {
  auth = getAuth();
  private currentUser!: string;

  constructor() {
    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        this.currentUser = user.email
      }
    });
  }

  addNewPublication(title: string, asset: any): Promise<any> {
    this.prepareImageAsset(asset);
    const db = getDatabase();
    return set(refDatabase(db, '/publications/' + btoa(this.currentUser)), {
      title: title
    });
  }

  prepareImageAsset(asset: any): any {
    const storage = getStorage();
    const nameImage = Date.now().toString();
    const storageRef = refStorage(storage, `assets/${nameImage}`)
    uploadBytes(storageRef, asset).then(() => {
      console.log('Uploaded completed!');
    });
  }
}
