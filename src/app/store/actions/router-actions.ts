import { NavigationExtras } from '@angular/router';

import { Action } from '@ngrx/store';

export enum RouterActions {
  NAVIGATE = '[ROUTRE] Navigate to other url'
}

export class Navigate implements Action {
  readonly type = RouterActions.NAVIGATE;

  constructor(
    public url: any[],
    public queryParams?: object,
    public navigationExtras?: NavigationExtras
  ){
    console.log('Build Navigation action');
  }
}