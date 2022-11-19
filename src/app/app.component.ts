import { Component } from '@angular/core';
import { FirebaseSDKService } from './shared/services/firebase/firebase-sdk.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FirebaseSDKService]
})
export class AppComponent {
  constructor(private firebaseSDK: FirebaseSDKService) { }
}
