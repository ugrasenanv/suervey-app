import { Injectable, Inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import {switchMap, map, catchError } from 'rxjs/operators';

import { Effect, Actions } from '@ngrx/effects';

import { TableService, TABLE_SERVICE, DataTable, Config } from '../entities';
import * as Action from '../actions';

@Injectable()
export class TableEffectsService {

  constructor(
    @Inject(TABLE_SERVICE) private _tableService: TableService<any>,
    private _action$: Actions
  ){}

  @Effect()
  loadPage = this._action$.ofType(Action.TableActions.LOAD_ROWS)
  .pipe(
    switchMap((action: Action.LoadRows) => this._tableService.getData(action.size, action.pagNum)),
    map((dataTable: DataTable<any>) => new Action.LoadRowsSuccess(dataTable.data, dataTable.lastPage, dataTable.pageActual, dataTable.size)),
    catchError((err: any) => of(new Action.LoadRowsError(err)))
  )

  @Effect()
  loadConfig = this._action$.ofType(Action.TableActions.LOAD_CONFIG)
  .pipe(
    switchMap((action: Action.LoadConfig) => this._tableService.getConfig()),
    map((config: Config) => new Action.LoadConfigSuccess(config)),
    catchError((err: any) => of(new Action.LoadConfigError(err)))
  )
}