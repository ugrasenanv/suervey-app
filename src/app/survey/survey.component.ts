import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UsersActions } from '../actions/users.actions';

import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
// import { User } from '../_models';
// import { UserService } from '../_services';

// @Component({ templateUrl: 'admin.component.html' })

@Component({
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
    loading = false;
    users: User[] = [];
    @select('users') public users$: Observable<User>;

  constructor(public actions:  UsersActions) {}

  addUser(labelInput: HTMLInputElement) {
      this.actions.add(labelInput.value);
      labelInput.value = '';
  }

    // constructor(private userService: UserService) { }

    ngOnInit() {
        // this.loading = true;
        // this.userService.getAll().pipe(first()).subscribe(users => {
        //     this.loading = false;
        //     this.users = users;
        // });
    }
}