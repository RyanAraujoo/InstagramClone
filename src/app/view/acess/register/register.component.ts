import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/shared/services/userData.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserDataService]
})

export class RegisterComponent {
  constructor(private userData: UserDataService) {}

    private formRegister =  new FormGroup({
      numberPhoneMail : new FormControl('',[Validators.required]),
      completedName : new FormControl('',[Validators.required, Validators.minLength(5)]),
      user : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required, Validators.minLength(6)]),
    })

    get _FormRegister (): FormGroup {
        return this.formRegister
    }

    setDataForm() {
      this.userData.setUser(this._FormRegister.value.numberPhoneMail,this._FormRegister.value.completedName,this._FormRegister.value.user,this._FormRegister.value.password);
    }

    ValidatorFormOnButton(): string { return this._FormRegister.valid ? '' : 'disabled' }
}
