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
  name = 'Learning Angular';
  onClickChangeName() {
    this.name = 'Learning to pass data from parent to child component.';
  }
  fruits = ['Apple', 'Banana', 'Mango', 'Grapes'];
  userData = {
    id: 1,
    name: 'Abc',
    age: 25,
    isMarried: false,
  };
  age = 25;
  user_name = 'John';
  user_age = 25;
  is_admin = true;
  user = {
    name: 'Johnny',
    age: 55,
    city: 'Surat',
  };
}
