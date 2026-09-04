import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  // template: `
  // <h3>{{ 2 + 2 }}</h3>
  // <h3>{{ count }}</h3>
  // `
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  public count = 0;
  public name = 'John';
  firstName = 'Hello';
  lastName = 'World';
  price = 100;
  quantity = 3;

  getName() {
    return 'Johny';
  }

  user = {
    name: 'John',
    age: 25,
  };

  fieldName = 'somthing..';
  imageUrl = 'favicon.ico';

  color = 'red';

  isLoggedIn = true;

  isDisabled = true;

  url = window.location.href;
}
