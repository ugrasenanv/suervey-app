import { Action } from '@ngrx/store';

import { DataTable, Config } from '../entities';

export enum TableActions {
  LOAD_CONFIG = '[TABLE] Loading the configuration',
  LOAD_CONFIG_SUCCESS = '[TABLE] Configuration loaded successfull',
  LOAD_CONFIG_ERROR = '[TABLE] Error loading the configuration',
  LOAD_ROWS = '[TABLE] Loading rows',
  LOAD_ROWS_SUCCESS = '[TABLE] rows loaded successfully',
  LOAD_ROWS_ERROR = '[TABLE] Error loading the rows',
  SELECT_ROW = '[TABLE] Row selected'
}

export class LoadRows implements Action {
  readonly type = TableActions.LOAD_ROWS;

  constructor(
    public pagNum: number,
    public size: number
  ){}
}

export class LoadRowsSuccess implements Action {
  readonly type = TableActions.LOAD_ROWS_SUCCESS;

  constructor(
    public data: any[],
    public lastPage: number,
    public currentPage: number,
    public size: number
  ){}
}

export class LoadConfig implements Action {
  readonly type = TableActions.LOAD_CONFIG;
}

export class LoadConfigSuccess implements Action {
  readonly type = TableActions.LOAD_CONFIG_SUCCESS;

  constructor(
    public config: Config
  ){}
}

export class LoadRowsError implements Action {
  readonly type = TableActions.LOAD_ROWS_ERROR;

  constructor(
    public err: any
  ){}
}

export class LoadConfigError implements Action {
  readonly type = TableActions.LOAD_CONFIG_ERROR;

  constructor(
    public err: any
  ){}
}

export class SelectRow implements Action {
  readonly type = TableActions.SELECT_ROW;

  constructor(
    public indexRow: number
  ){}
}

export type ALL = 
LoadConfig |
LoadConfigSuccess |
LoadConfigError |
LoadRows |
LoadRowsError |
LoadRowsSuccess |
SelectRow;