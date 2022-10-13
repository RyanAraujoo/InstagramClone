import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { DatabaseMockadoService } from './../mocks/database-mockado.service';
import { DatabaseFirebaseService } from './firebase/database-firebase.service';
import { IdataForm } from './../IdataForm';
@Injectable({
  providedIn: 'root'
})
export class UserDataService implements IdataForm {
dados: IdataForm
constructor() {
  if (environment.production) {
      this.dados = new DatabaseFirebaseService
  } else {
      this.dados = new DatabaseMockadoService
  }
}
  getUser(user: string, pass: string): boolean {
    return this.dados.getUser(user,pass)
  }
  setUser(data: string, name: string, user: string, password: string): boolean {
    return this.dados.setUser(data,name,user,password)
  }

}
