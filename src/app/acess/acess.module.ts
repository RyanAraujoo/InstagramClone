import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AcessComponent } from './acess.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AcessComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    AcessComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent
  ]
})
export class AcessModule {}
