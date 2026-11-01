import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from './student';
import { JsonPipe, TitleCasePipe } from '@angular/common';
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
  emailUpdates: boolean;
  termsAccepted: boolean;
  learningTopics: string[];
}

@Component({
  imports: [FormsModule, JsonPipe, TitleCasePipe, EmailAvailabilityValidator],
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
  protected emailUpdates = false;
  protected termsAccepted = false;
  protected readonly learningTopics = ['components', 'forms', 'services', 'routing'];
  protected selectedTopics: string[] = [];
  student2 = new Student('', '', '');

  protected get allTopicsSelected(): boolean {
    return this.learningTopics.every((topic) => this.selectedTopics.includes(topic));
  }

  protected get someTopicsSelected(): boolean {
    return this.selectedTopics.length > 0 && !this.allTopicsSelected;
  }

  protected setTopicSelected(topic: string, checked: boolean): void {
    this.selectedTopics = checked
      ? [...new Set([...this.selectedTopics, topic])]
      : this.selectedTopics.filter((selectedTopic) => selectedTopic !== topic);
  }

  protected toggleAllTopics(checked: boolean): void {
    this.selectedTopics = checked ? [...this.learningTopics] : [];
  }

  protected displayFormValue(form: NgForm): Record<string, unknown> {
    const { password, ...values } = form.value;
    return {
      ...values,
      learningTopics: [...this.selectedTopics],
      password: password ? '[hidden]' : '',
    };
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
      emailUpdates: this.emailUpdates,
      termsAccepted: this.termsAccepted,
      learningTopics: [...this.selectedTopics],
    };
  }
}
