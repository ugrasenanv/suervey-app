import { Injectable } from '@angular/core';
import { IAppState } from '../store/index';
import { NgRedux } from '@angular-redux/store';
import { User } from '../model/user';

@Injectable()
export class UsersActions {
  static USER_ADD = 'USER_ADD';
  static USER_DELETE = 'USER_DELETE';

  constructor(
    private ngRedux: NgRedux<IAppState>,
  ) { }

  add(name: string): void {
    console.log(name)
    this.ngRedux.dispatch({
      type: UsersActions.USER_ADD,
      payload: {
        id: new Date().valueOf(), // random id
        name
      }
    });
  }
  
  delete(id): void {
    this.ngRedux.dispatch({
      type: UsersActions.USER_DELETE,
      payload: id
    });
  }

}
