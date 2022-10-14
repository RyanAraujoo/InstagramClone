import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessComponent } from './acess.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'register', component: CadastroComponent},
]

@NgModule({
  declarations: [
    AcessComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent
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
    CadastroComponent,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AcessModule {}