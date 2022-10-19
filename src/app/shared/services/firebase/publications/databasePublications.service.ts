import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";
// import { getStorage, uploadBytes } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class DatabasePublicationsService {
   auth = getAuth();
  private currentUser!: string;

  constructor() {
    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        this.currentUser = user.email;
      }
  })
}
  addNewPublication(title: string, asset: any): Promise<any> {
    // this.prepareImageAsset(asset)
    const db = getDatabase();
  return set(ref(db, '/publications/' + btoa(this.currentUser)), {
    title: title
  });
  }

 /*  prepareImageAsset(asset: any): any {
    const storage: any = getStorage();
    const nameImage = Date.now().toString()

    const storageRef = ref(storage, `assets/${nameImage}`);

    // uploadBytes(storageRef, file).then((snapshot) => {
      //console.log('Uploaded a blob or file!');
    // });
  }

  getImageAsset() {
const storage: any = getStorage();
const pathReference = ref(storage, 'images/stars.jpg');
// Create a reference from a Google Cloud Storage URI
const gsReference = ref(storage, 'gs://bucket/images/stars.jpg');
const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');
  } */


}


