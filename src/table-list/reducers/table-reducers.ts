import { ActionReducerMap } from '@ngrx/store';

import { DataTable, TableState } from '../entities';
import * as featureActions from '../actions';

type Actions = featureActions.ALL;

const InitialState: DataTable<any> = {
  pageActual: 0,
  lastPage: 0,
  size: 0,
  data: [],
  config: []
}

export const reducers: ActionReducerMap<TableState> = {
  table: TableReducer
}

export function TableReducer (state: DataTable<any> = InitialState, action: Actions): DataTable<any> {
  const result = {...state};

  switch(action.type) {
    case featureActions.TableActions.LOAD_CONFIG:
      result.loading = true;
    break;
    case featureActions.TableActions.LOAD_CONFIG_ERROR:
      result.err = {...action.err};
    break;
    case featureActions.TableActions.LOAD_CONFIG_SUCCESS:
      result.loading = false;
      result.config = [...action.config];
    break;
    case featureActions.TableActions.LOAD_ROWS:
      result.loading = true;
    break;
    case featureActions.TableActions.LOAD_ROWS_ERROR:
      result.loading = false;
      result.err = {...action.err};
    break;
    case featureActions.TableActions.LOAD_ROWS_SUCCESS:
      result.loading = false;
      result.data = [...action.data];
      result.lastPage = action.lastPage;
      result.pageActual = action.currentPage;
      result.size = action.size;
    break;
    case featureActions.TableActions.SELECT_ROW:
      result.rowSelected = action.indexRow;
    break;
  }

  return result;
}