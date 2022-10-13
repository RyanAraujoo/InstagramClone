import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from './../../shared/services/userData.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserDataService]
})
export class LoginComponent {

  constructor(private userData: UserDataService) {}
       private formLogin =  new FormGroup({
          user : new FormControl('',[Validators.required]),
          password : new FormControl('',[Validators.required, Validators.minLength(6)]),
        })

        get _FormLogin (): FormGroup {
            return this.formLogin
        }

        ValidatorFormOnButton(): string { return this._FormLogin.valid ? '' : 'disabled' }

        getUserConsult() {
          console.log(this.userData.getUser(this._FormLogin.value.user,this._FormLogin.value.password))
        }
}
