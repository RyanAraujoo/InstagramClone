import { Injectable } from '@angular/core';
import { IdataForm } from './../IdataForm';
import { DataBaseMock } from './dataForm.mock';

@Injectable({
  providedIn: 'root'
})
export class DatabaseMockadoService implements IdataForm{

  constructor() { }
  getUser(user: string, pass: string) {
    if(user == DataBaseMock.userName && pass == DataBaseMock.senha) {
          return true
      } else {
          return false
      }
  }
  setUser(data: string, name: string, user: string, password: string) {
      DataBaseMock.numberPhone = data
      DataBaseMock.completedName = name
      DataBaseMock.userName = user
      DataBaseMock.senha = password
      return true
  }
}
