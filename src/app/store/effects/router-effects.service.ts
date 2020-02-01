import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

import { Effect, Actions } from '@ngrx/effects';

import { RouterActions, Navigate} from '../actions';

@Injectable()
export class RouterEffect {

  constructor(
    private _actions$: Actions,
    private _router: Router
  ) {}

  @Effect({ dispatch: false })
  navigate= this._actions$.ofType(RouterActions.NAVIGATE)
  .pipe(
    tap(({ url, queryParams, navigationExtras} : Navigate) => {
      this._router.navigate(url, { queryParams, ...navigationExtras});
    })
  )
}