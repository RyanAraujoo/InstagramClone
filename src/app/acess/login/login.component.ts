import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
       private formLogin =  new FormGroup({
          user : new FormControl('',[Validators.required]),
          password : new FormControl('',[Validators.required, Validators.minLength(6)]),
        })

        get _FormLogin (): FormGroup {
            return this.formLogin
        }

        ValidatorFormOnButton(): string { return this._FormLogin.valid ? '' : 'disabled' }
}
