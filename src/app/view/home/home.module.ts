import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent }
]
@NgModule({
  declarations: [
    HomeComponent,
    PublicationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    HomeComponent,
    PublicationsComponent
  ]
})
export class HomeModule { }
