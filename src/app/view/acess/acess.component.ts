import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component} from '@angular/core';
import { STATE } from 'src/app/shared/enum/state.enum';

@Component({
  selector: 'app-acess',
  templateUrl: './acess.component.html',
  styleUrls: ['./acess.component.scss'],
  animations: [
    trigger('acess', [
      // ...
      state(STATE.TRUE, style({
        opacity: 1
      })),
      transition(`void => ${STATE.TRUE}`, [
        style({
          opacity: 0,
          transform: 'translate(-50px,0)'
        }),
        animate('500ms 0s ease-in-out')
      ]),
    ]),
    trigger('opacityAnimation', [
      // ...
      state(STATE.TRUE, style({
        opacity: 1
      })),
      transition(`void => ${STATE.TRUE}`, [
        style({
          opacity: 0,
          transform: 'translate(25px,0)'
        }),
        animate('500ms 0s ease-in-out')
      ]),
    ]),
  ]
})
export class AcessComponent {

  isOpen: STATE = STATE.TRUE

  noBanner(v: boolean): boolean {
    return v
  }

}
