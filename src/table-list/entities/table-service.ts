import { InjectionToken } from '@angular/core';

import { Observable } from 'rxjs';

import { Config } from './config';
import { DataTable } from './data';

export interface TableService<T> {
  getConfig(): Observable<Config>;
  getData(size: number, page: number): Observable<DataTable<T>>
}

export const TABLE_SERVICE: InjectionToken<TableService<any>> = new InjectionToken<TableService<any>>('TABLE_SERVICE');