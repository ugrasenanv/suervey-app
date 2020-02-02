import { combineReducers } from 'redux';
import { UsersReducer } from './users.reducer';
import { User } from '../model/user';

export class IAppState {
  users: User[];
  config;
};

export const rootReducer = combineReducers<IAppState>({
  users: UsersReducer
});


