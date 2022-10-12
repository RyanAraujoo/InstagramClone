import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessModule } from './acess/acess.module';

import { LoginComponent } from './acess/login/login.component';
import { CadastroComponent } from './acess/cadastro/cadastro.component';

const routes: Routes = [

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
