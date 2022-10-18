import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { DatabaseMockadoService } from './../mocks/database-mockado.service';
import { DatabaseFirebaseService } from './firebase/database-firebase.service';
import { Methods } from '../models/methodsService.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserDataService implements Methods {
dados: Methods
constructor(private router: Router) {
  if (environment.production) {
    this.dados = new DatabaseMockadoService
  } else {
    this.dados = new DatabaseFirebaseService(this.router)
  }
}
  getUser(user: string, pass: string) {
    this.dados.getUser(user,pass)
  }
  setUser(data: string, name: string, user: string, password: string) {
    this.dados.setUser(data,name,user,password)
  }

}
