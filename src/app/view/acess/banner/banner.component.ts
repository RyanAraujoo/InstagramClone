import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { STATE } from 'src/app/shared/enum/state.enum';
import { Assets } from 'src/app/shared/models/assets.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner', [
      // ...
      state(STATE.TRUE, style({
        opacity: 1,
      })),
      state(STATE.FALSE, style({
        opacity: 0
      })),
      transition(`${STATE.FALSE} <=> ${STATE.TRUE}`, [
        animate('0.5s ease-in')
      ]),
    ]),
  ]
})
export class BannerComponent implements OnInit {
    ngOnInit(): void {
        setTimeout(() => {
            this.rotateIMG()
        },3000)
    }


   image: Array<Assets> = [
    {state: STATE.TRUE, url: '../../../../assets/bannerLogin/img_1.png'},
    {state: STATE.FALSE, url: '../../../../assets/bannerLogin/img_2.png'},
    {state: STATE.FALSE, url: '../../../../assets/bannerLogin/img_3.png'},
    {state: STATE.FALSE, url: '../../../../assets/bannerLogin/img_4.png'},
    {state: STATE.FALSE, url: '../../../../assets/bannerLogin/img_5.png'}
  ]

  isOpen: STATE = STATE.TRUE;
  idx: number = 0

  rotateIMG () {
    for (let i: number = 0; i <= 4; i ++ ) {
        if (this.image[i].state === STATE.TRUE) {
            this.image[i].state = STATE.FALSE
            this.idx = i === 4 ? 0 : i + 1
            break
        }
      }
      this.image[this.idx].state = STATE.TRUE
      setTimeout(() => { this.rotateIMG()},3000)
  }
}
