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

  receivedMessage = '';
  receiveMessage(data: string) {
    this.receivedMessage = data;
  }

  count = 0;
  receiveCount(value: number) {
    this.count = value;
  }

  userData: { name: string; age: number } | null = null;
  receiveUser(user: { name: string; age: number }) {
    this.userData = user;
  }
}
