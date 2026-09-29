import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  app = 'My Angular App';
  isLoggedIn = false;
  products = [
    { name: 'Laptop', price: 50000 },
    { name: 'Phone', price: 25000 },
    { name: 'Headphones', price: 3000 },
  ];
}
