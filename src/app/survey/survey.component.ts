import { select } from "@angular-redux/store";
import { Observable } from "rxjs";
import { User } from "../model/user";
import { UsersActions } from "../actions/users.actions";

import { Survey } from "../model/survey";
import { SurveyActions } from "../actions/survey.actions";

import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MustMatch } from "../_helpers/must-match.validator";

// import { User } from '../_models';
// import { UserService } from '../_services';
// @Component({ templateUrl: 'admin.component.html' })

@Component({
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  rating = 0;

  loading = false;
  users: User[] = [];
  surveys: Survey[] = [];
  @select("users") public users$: Observable<User>;
  @select("surveys") public surveys$: Observable<Survey>;  

  // constructor(public actions:  UsersActions) {} public actions:  UsersActions,
  constructor(private formBuilder: FormBuilder, public actions: UsersActions) {
  }
  

  surveyForm: FormGroup;

  addSurvey(parms) {
       this.actions.add(parms);
    // labelInput.value = "";
  }

  // addSurvey(labelInput: HTMLInputElement) {
  //     this.actions.add(labelInput.value);
  //     labelInput.value = '';
  // }

  // constructor(private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        gender: ["", Validators.required],
        phoneNumber: ["", [Validators.required, Validators.minLength(10)]],
        comments: ["", Validators.required],
        
        acceptTerms: [false, Validators.requiredTrue]
      }
    );
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
   let date: Date = new Date("2019-01-16");  
    this.registerForm.value.rating = this.rating;
     this.registerForm.value.date = date;
    console.log(this.rating);
    if (this.registerForm.invalid) {
      return;
    }

    this.addSurvey(this.registerForm.value);
    // alert(
    //   "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    // );
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
