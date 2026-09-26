import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [NgFor, NgIf],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  fruits = ['Apple', 'Banana', 'Carrot', 'Grapes', 'Mango'];
  persons = [
    {
      id: 1,
      name: 'Abc',
      age: 18,
      isMarried: true,
      active: false,
    },
    {
      id: 2,
      name: 'Def',
      age: 2,
      isMarried: false,
      active: true,
    },
    {
      id: 3,
      name: 'Ghi',
      age: 32,
      isMarried: true,
      active: true,
    },
  ];
  users = ['John', 'Alice', 'Bob'];
  selectUser(user: string) {
    console.log(user);
    alert(`You have click on user: ${user}`);
  }
  fruits1 = ['Apple', 'Banana', 'Mango', 'Orange'];
}
