import { createSelector } from '@ngrx/store';

import { getTable } from '../../table-list';
import { getRouterState } from '../../app/store';
import { Person } from '../entities';

export const getPerson = createSelector(
  getTable,
  getRouterState,
  (tableState, routerState): Person => {
    return routerState.state && tableState.data[routerState.state.params.index];;
  }
);