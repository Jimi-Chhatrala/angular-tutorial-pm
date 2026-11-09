import { NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');

  public condition = 2 > 10;

  public employees = [
    { name: 'Abc', gender: 'Male', age: 15 },
    { name: 'Def', gender: 'Female', age: 24 },
    { name: 'Ghi', gender: 'Male', age: 33 },
    { name: 'Jkl', gender: 'Female', age: 42 },
    { name: 'Mno', gender: 'Male', age: 51 },
  ];

  public course = 'Javascript';
}
