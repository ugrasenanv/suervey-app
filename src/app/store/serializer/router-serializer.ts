import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterStateUrl } from '../entities';

export class RouterSerializer implements RouterStateSerializer<RouterStateUrl> {

  serialize( routerState: RouterStateSnapshot ): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}