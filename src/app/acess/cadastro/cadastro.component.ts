import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent {


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

    }

    ValidatorFormOnButton(): string { return this._FormRegister.valid ? '' : 'disabled' }
}
