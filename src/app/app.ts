import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [NgIf],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  isDisplay = true;
  trueCondition = 10 > 5;
  falseCondition = 0 > 5;
  ifPart = false;
  ternaryDisplayCondition = false;
  username = 'John';
  fruit = 'Banana';
  isLogging = false;
  manageLoginLogout(isLoggedIn: boolean) {
    this.isLogging = isLoggedIn;
  }
  age = 20;
  isLoggedIn = true;
  isAdmin = true;
  isManager = true;
  user = {
    name: 'John',
    age: 25,
  };
  isVisible = true;
  condition = true;
  score = 75;
  isLoading = true;
}
