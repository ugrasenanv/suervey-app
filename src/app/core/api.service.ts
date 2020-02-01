import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';

import { Person } from '../../card';
import { configColumns } from './config';
import { data } from './data';
import { DataTable, TableService, Config } from '../../table-list';
import { ApiAnswer } from './api-answer';

@Injectable()
export class ApiService implements TableService<Person>{

  public getConfig(): Observable<Config> {
    return Observable.of(configColumns);
  }

  public getData(size: number, page: number): Observable<DataTable<Person>> {

    return Observable.of(data)
    .pipe(
      map((data: Person[]) => {
        const offset = size * (page - 1);
        const result: ApiAnswer<Person> = {
          limit: size,
          offset: offset,
          total: data.length,
          result: data.slice(offset, (size + offset))
        }

        return result;
      }),
      map((apiAnswer: ApiAnswer<Person>) => {
        const result: DataTable<Person> = {
          size: size,
          pageActual: page,
          lastPage: Math.ceil(apiAnswer.total / apiAnswer.limit),
          data: [...apiAnswer.result]
        };

        return result;
      })
    );
  }

  public getPerson(index: number): Observable<Person> {
    return Observable.of((data[index] as Person));
  }
}