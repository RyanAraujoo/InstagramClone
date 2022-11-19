import { Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { PublicationsComponent } from './publications/publications.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(PublicationsComponent) public child!: PublicationsComponent

    constructor(private router: Router) {}

  FinishAuth() {
      localStorage.removeItem("idToken")
      this.router.navigateByUrl('')
  }

  updateTimeLine() {
    this.child.updateTimeLine()
  }
}
