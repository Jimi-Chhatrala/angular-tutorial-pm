import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  count: number = 0;

  updateCount(countType: string) {
    countType == 'plus' ? this.count++ : this.count--;
  }
}
