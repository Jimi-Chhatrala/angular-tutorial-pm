import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  public newId = 'ExampleId';
  public isDisabled = true;
  protected readonly title = signal('angular-tutorial-pm');
}
