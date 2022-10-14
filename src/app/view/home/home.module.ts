import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PublicationsComponent } from './publications/publications.component';

@NgModule({
  declarations: [
    HomeComponent,
    PublicationsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    PublicationsComponent
  ]
})
export class HomeModule { }
