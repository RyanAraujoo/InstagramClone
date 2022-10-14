import { Component } from '@angular/core';
import { SdkService } from './shared/services/firebase/sdk.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SdkService]
})
export class AppComponent {
    constructor(private service: SdkService) {}
}
