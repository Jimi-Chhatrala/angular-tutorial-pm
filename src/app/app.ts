import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  pizza = 'Fajita1';
  age = 20;
  day = 'Monday';
  role = 'admin';
  status = 2;
}
