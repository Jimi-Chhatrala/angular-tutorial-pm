import { Component, signal } from '@angular/core';
import { StudentDataComp } from './components/student-data-comp/student-data-comp';
import { StudentListComp } from './components/student-list-comp/student-list-comp';
import { StudentService } from './services/student.service';

@Component({
  imports: [StudentDataComp, StudentListComp],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  providers: [StudentService],
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
}
