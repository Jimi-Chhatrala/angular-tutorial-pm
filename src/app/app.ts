import { Component, signal } from '@angular/core';
import { EventHandlingComp } from './components/event-handling-comp/event-handling-comp';

@Component({
  imports: [EventHandlingComp],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
}
