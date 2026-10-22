import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from './student';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected profile = {
    name: '',
    email: '',
    age: null as number | null,
  };

  protected submittedProfile: typeof this.profile | null = null;

  student2 = new Student('', '', '');
  protected onSubmit(form:any
    // :  NgForm
  ): void {
    console.log('++++++++++++++++++++ form: ', form);
    const student1 = new Student(form.value.name, form.value.age, form.value.email);
    console.log('++++++++++++++++++++ student1: ', student1);
    if (form.invalid) {
      return;
    }

    this.submittedProfile = { ...this.profile };
  }
}
