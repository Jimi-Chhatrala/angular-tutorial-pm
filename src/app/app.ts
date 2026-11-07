import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, NgIf],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');

  signupForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(50)]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$',
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'),
    ]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    console.log(this.signupForm.value);
  }

  get f() {
    return this.signupForm.controls;
  }
}
