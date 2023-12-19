import { OnDestroy,AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
//import { ApiState } from '../enums/api-state.enum';

export class BaseComponent implements AfterViewInit,OnDestroy {
  destroy$: Observable<boolean>;
  private _destroy: Subject<boolean>;
  //public apiStates = ApiState;

  constructor() {
    this._destroy = new Subject();
    this.destroy$ = this._destroy.asObservable();
  }
  ngAfterViewInit() {
  }


  ngOnDestroy(): void {
    this._destroy.next(true);
   this._destroy.complete();
 }
}
