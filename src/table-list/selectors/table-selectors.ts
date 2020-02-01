import { createFeatureSelector, createSelector } from '@ngrx/store';

import { reducers } from '../reducers';
import { TableState } from '../entities';

export const getFeatureState = createFeatureSelector<TableState>('tableState');

export const getTable = createSelector(getFeatureState, (state: TableState) => state.table);