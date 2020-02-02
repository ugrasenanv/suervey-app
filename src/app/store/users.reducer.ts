import { UsersActions } from '../actions/users.actions';
import { User } from '../model/user';

const INITIAL_STATE: User[] = [
  { id: 1, name: 'Fabio' },
  { id: 2, name: 'Lorenzo' },
  { id: 3, name: 'Silvia' },
  { id: 4, name: 'Lisa' }
];

export function UsersReducer (
  state: User[] = INITIAL_STATE, action: any
  ): any {

  switch (action.type) {
    case UsersActions.USER_ADD:
      return [...state, action.payload];

    case UsersActions.USER_DELETE:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return [...state];
  }
}

