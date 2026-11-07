import { NgIf, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, NgIf, NgFor],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  hobbiesArray: string[] = ['Reading', 'Writing', 'Singing'];

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
    accept: new FormControl(false, [Validators.requiredTrue]),
    hobbies: new FormArray([], [Validators.required]),
  });

  onChange(e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;
    console.log(checkedValue, checked);

    const checkedArray = this.signupForm.get('hobbies') as FormArray;

    if (checked) {
      checkedArray.push(new FormControl(checkedValue));
    } else {
      let index: number = 0;

      checkedArray.controls.forEach((item) => {
        if (item.value == checkedValue) {
          checkedArray.removeAt(index);
        }
        index++;
      });
    }
  }

  handleSubmit() {
    console.log(this.signupForm.value);
  }

  get f() {
    return this.signupForm.controls;
  }
}
