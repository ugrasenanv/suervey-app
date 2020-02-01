import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Person } from '../entities';
import { getPerson } from '../selectors';

@Component({
  selector: 'card-container',
  templateUrl: './card-container.component.html'
})
export class CardContainerComponent {

  public person$: Observable<Person>;

  constructor( private _store: Store<Person>){
    this.person$ = this._store.select(getPerson);
  }
}