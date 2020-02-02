import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UsersActions } from '../actions/users.actions';

@Component({
  selector: 'app-survey-form',
  template: `
    <div>

    <hr>
     TOTAL USER: {{ (users$ | async).length }}

     <input type=text 
       placeholder="add user"
       #newUser
       (keyup.enter)="addUser(newUser)" />

     <hr />
     <li class="list-group-item"
         *ngFor="let item of (users$ | async)">
        
        {{item.name}}
        
        <button class="btn btn-danger btn-xs pull-right" 
          (click)="actions.delete( item.id )">
          delete
        </button>
      </li>

    </div>  `,
})
export class SurveyFormComponent  { 
  @select('users') public users$: Observable<User>;

  constructor(public actions:  UsersActions) {}

  addUser(labelInput: HTMLInputElement) {
      this.actions.add(labelInput.value);
      labelInput.value = '';
  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-survey-form',
//   templateUrl: './survey-form.component.html',
//   styleUrls: ['./survey-form.component.css']
// })
// export class SurveyFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }