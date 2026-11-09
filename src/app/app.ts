import { Component, signal } from '@angular/core';
import { CourseCardComp } from './components/course-card-comp/course-card-comp';

@Component({
  imports: [CourseCardComp],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
}
