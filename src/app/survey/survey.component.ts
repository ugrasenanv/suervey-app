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
import { Router } from '@angular/router';

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
  @select("users") public users$: Observable<User>;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder, 
      public actions: UsersActions) {
  }

  surveyForm: FormGroup;

  addSurvey(parms) {
       this.actions.add(parms);
  }
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
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
      this.router.navigate(['/']);
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
