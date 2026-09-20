import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ChildComp } from './child-comp/child-comp';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [ChildComp, FormsModule, JsonPipe, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');

  submit(form: NgForm) {
    console.log(form.value);
  }

  getNameOnButtonClick(value: string) {
    console.log('getNameOnButtonClick:', value);
    this.displayName = value;
  }
  displayName = '';
  displayName2 = '';

  getNameOnKeyUp(value: string) {
    console.log('getNameOnKeyUp:', value);
    this.displayName2 = value;
  }

  displayName3 = '';
  getPlaceholderText(value: string) {
    this.displayName3 = value;
  }

  displayName4 = '';
  getNameAttributeValue(value: string) {
    this.displayName4 = value;
  }

  displayName5 = '';
  getInputType(value: string) {
    this.displayName5 = value;
  }

  displayName6: HTMLInputElement | string = '';
  getInputReference(element: HTMLInputElement) {
    this.displayName6 = element;
    console.log('Element value:', element.value);
  }

  displayName7 = '';
  getHeadingInnerHtml(value: string) {
    this.displayName7 = value;
  }

  displayName8 = '';
  getFullName(firstName: string, lastName: string) {
    this.displayName8 = firstName + ' ' + lastName;
  }

  displayName9 = '';
  getFullNameOnKeyUp(firstName: string, lastName: string) {
    this.displayName9 = firstName + ' ' + lastName;
  }
}
