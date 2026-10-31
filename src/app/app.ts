import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from './student';

@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');

  constructor() {}
  std = new Student('John Doe', 24, 'john@email.com');
  save(formData: any) {
    // console.log('++++++++++++++++++++ formData: ', formData);
    // const std = new Student(formData.name, formData.age, formData.email);
    // console.log('++++++++++++++++++++ std: ', std);
    console.log('++++++++++++++++++++ this.std: ', this.std);
  }
}
