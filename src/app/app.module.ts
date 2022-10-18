import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcessModule } from './view/acess/acess.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './view/home/home.module';

import { DatabaseFirebaseService } from './shared/services/firebase/database-firebase.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    AcessModule,
    HomeModule
  ],
  providers: [DatabaseFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
