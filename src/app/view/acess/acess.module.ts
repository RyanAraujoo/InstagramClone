import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessComponent } from './acess.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
    BannerComponent,
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    AcessComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AcessModule {}
