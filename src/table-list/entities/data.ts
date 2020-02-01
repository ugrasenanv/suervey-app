import { Config } from './config';

export interface DataTable<T> {
   pageActual: number;
   lastPage: number;
   size: number;
   data: T[];
   loading?: boolean;
   err?: any;
   rowSelected?: number;
   config?: Config
}

export interface TableState {
  table: DataTable<any>;
}