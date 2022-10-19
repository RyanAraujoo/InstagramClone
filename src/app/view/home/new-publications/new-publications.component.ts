import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { DatabasePublicationsService } from 'src/app/shared/services/firebase/publications/databasePublications.service';

@Component({
  selector: 'app-new-publications',
  templateUrl: './new-publications.component.html',
  styleUrls: ['./new-publications.component.scss']
})
export class NewPublicationsComponent {
  newPubl: FormGroup = new FormGroup({
    title: new FormControl(''),
    asset: new FormControl('')
  })
  idUser!: string;
  constructor(private publicService: DatabasePublicationsService) {}

  getFile(event: any) {
     console.log((<HTMLInputElement>event.target).files)
  }

  addNewPublication() {
      this.publicService.addNewPublication(this.newPubl.value.title,this.newPubl.value.asset[0]).then(
          () => { console.log("Publicação Criada com Sucesso!")}
      ).catch(
          (erro: any) => { console.log("Erro de Criação" + erro.message)}
      )
  }
}
