import { Injectable } from '@angular/core';
import { IAppState } from '../store/index';
import { NgRedux } from '@angular-redux/store';
import { Survey } from '../model/survey';

@Injectable()
export class SurveyActions {
  static SURVEY_ADD = 'SURVEY_ADD';
  static SURVEY_DELETE = 'SURVEY_DELETE';

  constructor(
    private ngRedux: NgRedux<IAppState>,
  ) { }

  add(name: string): void {
    console.log(name)
    this.ngRedux.dispatch({
      type: SurveyActions.SURVEY_ADD,
      payload: {
        id: new Date().valueOf(), // random id
        name
      }
    });
  }
  
  delete(id): void {
    this.ngRedux.dispatch({
      type: SurveyActions.SURVEY_DELETE,
      payload: id
    });
  }

}
