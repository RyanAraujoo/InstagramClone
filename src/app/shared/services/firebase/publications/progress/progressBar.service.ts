import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  private progressValue: number = 0
constructor() {}

  set _PercentageUploud (progressBarPercentage: number)  {
        this.progressValue = progressBarPercentage
  }

  get PercentageUploud(): number{
    
        return this.progressValue
  }
}
