import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { RouterState } from '../entities';

export const reducers: ActionReducerMap<RouterState> = {
  routerReducer: routerReducer
}