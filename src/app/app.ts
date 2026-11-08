import { Component, signal } from '@angular/core';
import { ChangeMeDirective } from './shared/change-me.directive';

@Component({
  imports: [ChangeMeDirective],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
}
