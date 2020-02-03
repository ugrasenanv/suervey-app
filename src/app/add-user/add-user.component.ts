import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UsersActions } from '../actions/users.actions';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';

// import { User } from '../_models';
// import { UserService } from '../_services';
// @Component({ templateUrl: 'admin.component.html' })

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
   
    loading = false;
    users: User[] = [];
    @select('users') public users$: Observable<User>;

//  constructor(private formBuilder: FormBuilder, private fb: FormBuilder, public actions:  UsersActions) { }

  // constructor(public actions:  UsersActions) {}
    constructor(private formBuilder: FormBuilder, public actions:  UsersActions) {
    // this.surveyForm = this.fb.group({
    //   firstName: this.fb.control('', Validators.required),
    //   lastName: this.fb.control('', Validators.required)
    // });
  }

  surveyForm: FormGroup;

  addUser(labelInput: HTMLInputElement) {
      this.actions.add(labelInput.value);
      labelInput.value = '';
  }

    // constructor(private userService: UserService) { }

    ngOnInit() {
         this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

 onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }




}