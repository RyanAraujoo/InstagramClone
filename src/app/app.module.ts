import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcessModule } from './acess/acess.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    AcessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
