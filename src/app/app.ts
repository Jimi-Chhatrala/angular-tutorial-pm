import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from './student';
import { JsonPipe } from '@angular/common';
import {
  COMPLETE_EMAIL_PATTERN,
  EmailAvailabilityValidator,
} from './email-availability.directive';

@Component({
  imports: [FormsModule, JsonPipe, EmailAvailabilityValidator],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly completeEmailPattern = COMPLETE_EMAIL_PATTERN.source;
  protected readonly passwordPattern =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9\\s]).*';

  protected profile = {
    name: '',
    email: '',
    age: null as number | null,
  };

  protected submittedProfile: typeof this.profile | null = null;

  protected password = '';
  student2 = new Student('', '', '');
  protected displayFormValue(form: NgForm): Record<string, unknown> {
    const { password, ...values } = form.value;
    return { ...values, password: password ? '[hidden]' : '' };
  }

  protected onSubmit(form: NgForm): void {
    console.log('++++++++++++++++++++ form: ', form);
    const student1 = new Student(form.value.name, form.value.age, form.value.email);
    console.log('++++++++++++++++++++ student1: ', student1);
    if (form.invalid) {
      return;
    }

    this.submittedProfile = { ...this.profile };
  }
}
