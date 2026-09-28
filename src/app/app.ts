import { Component, signal } from '@angular/core';
import { ChildComp } from './child-comp/child-comp';

@Component({
  imports: [ChildComp],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  message = '';
}
