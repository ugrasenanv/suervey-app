import { combineReducers } from "redux";
import { UsersReducer } from "./users.reducer";
import { User } from "../model/user";
import { SurveyReducer } from "./survey.reducer";
import { Survey } from "../model/survey";

export class IAppState {
  users: User[];
  surveys: Survey[];
  config;
}

export const rootReducer = combineReducers<IAppState>(
  {
    users: UsersReducer,
    surveys: SurveyReducer
});
