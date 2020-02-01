import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getTable } from '../selectors';
import { DataTable, TableState } from '../entities';
import * as Actions from '../actions';
import { Navigate } from '../../app/store';


@Component({
  selector: 'table-container',
  templateUrl: 'table-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TableContainerComponent {

  public dataTable$: Observable<DataTable<any>>;

  constructor( private _store: Store<TableState>){
    this.dataTable$ = this._store.select(getTable);

    this._store.dispatch(new Actions.LoadConfig());
    this._store.dispatch(new Actions.LoadRows(1, 5));
  }

  public requestNewPage(newPage: {page: number, size: number}) {
    this._store.dispatch(new Actions.LoadRows(newPage.page, newPage.size));
  }

  public getSelection(index: number){
    console.log('Launch action');
    this._store.dispatch(new Navigate(['details', `${index}`]));
  }
}