import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, set, ref as refDatabase} from 'firebase/database';

import { getStorage, ref as refStorage,uploadBytesResumable} from "firebase/storage";
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
        this.currentUser = user.email
      }
    });
  }

  addNewPublication(title: string, asset: any): Promise<any> {
    this.prepareImageAsset(asset);
    return set(refDatabase(getDatabase(), '/publications/' + btoa(this.currentUser)), {
      title: title
    })
  }

  prepareImageAsset(asset: any): any {
    const nameImage = Date.now().toString()
    const storageRef = refStorage(getStorage(), `assets/${nameImage}`)
    const uploadTask = uploadBytesResumable(storageRef, asset)
    uploadTask.on('state_changed',(snapshot) => {
      this.progressService._PercentageUploud = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  }
 )}
 
}
