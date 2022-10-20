import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { interval, Subject, takeUntil } from 'rxjs';
import { DatabasePublicationsService } from 'src/app/shared/services/firebase/publications/databasePublications.service';
import { ProgressBarService } from './../../../shared/services/firebase/publications/progress/progressBar.service';

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
  img!: any
  valueNowProgress!: number

  constructor(private publicService: DatabasePublicationsService, private progressBarService: ProgressBarService) {}


  getFile(event: any) {
     this.img = (<HTMLInputElement>event.target).files
  }

  addNewPublication() {

    let go = new Subject<boolean>();
    go.next(true);
    const takeFive = interval(1000).pipe(takeUntil(go));

    takeFive.subscribe(() => {
      this.valueNowProgress = this.progressBarService.PercentageUploud;
      if (this.valueNowProgress === 100) {
        go.next(false);
      }
    });

    this.publicService
      .addNewPublication(this.newPubl.value.title, this.img[0])
      .then((res) => {
        console.log('Publicação Criada com Sucesso!');
      })
      .catch((erro: any) => {
        console.log('Erro de Criação' + erro.message);
      });


  }
}
