import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessComponent } from './acess.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerModule } from './banner/banner.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', component: AcessComponent, children:
    [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }
]

@NgModule({
  declarations: [
    AcessComponent,
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BannerModule,
    BrowserAnimationsModule
  ],

  exports: [
    AcessComponent,
    BannerModule,
    LoginComponent,
    RegisterComponent,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AcessModule {}
