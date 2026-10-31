import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from './student';
import { JsonPipe } from '@angular/common';
import {
  COMPLETE_EMAIL_PATTERN,
  EmailAvailabilityValidator,
} from './email-availability.directive';

interface SubmittedProfile {
  name: string;
  email: string;
  age: number | string;
  learningGoal: string;
  experienceLevel: string;
}

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

  protected submittedProfile: SubmittedProfile | null = null;

  protected password = '';
  protected learningGoal = '';
  protected experienceLevel = '';
  student2 = new Student('', '', '');
  protected displayFormValue(form: NgForm): Record<string, unknown> {
    const { password, ...values } = form.value;
    return { ...values, password: password ? '[hidden]' : '' };
  }

  protected onSubmit(form: NgForm): void {
    if (form.invalid || form.pending) {
      return;
    }

    this.submittedProfile = {
      name: this.student2.name,
      email: this.student2.email,
      age: this.student2.age,
      learningGoal: this.learningGoal,
      experienceLevel: this.experienceLevel,
    };
  }
}
