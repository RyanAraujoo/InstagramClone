import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { PublicationsComponent } from './publications/publications.component';
import { HomeGuardService } from 'src/app/shared/guards/home-guard.service';
import { NewPublicationsComponent } from './new-publications/new-publications.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatabasePublicationsService } from 'src/app/shared/services/firebase/publications/databasePublications.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [HomeGuardService] },
];
@NgModule({
  declarations: [
    HomeComponent,
    PublicationsComponent,
    NewPublicationsComponent,
  ],
  imports: [ReactiveFormsModule, CommonModule, RouterModule.forRoot(routes)],
  exports: [HomeComponent],
  providers: [DatabasePublicationsService]
})
export class HomeModule {}
