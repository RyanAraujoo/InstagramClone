import { Component, Input, OnInit } from '@angular/core';
import { DatabaseFirebaseService } from 'src/app/shared/services/firebase/database-firebase.service';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
  email!: string | null;
  publ: any = []
  @Input() timeLine: boolean = false
  constructor(private databaseFirebaseService: DatabaseFirebaseService) {}

  ngOnInit(): void {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.email = user.email;
      }
    })
   this.updateTimeLine()
  }

  updateTimeLine() {
    this.databaseFirebaseService.consultPublication().then((v) => {
      console.log(v)
      this.publ = v
    })
  }
}
