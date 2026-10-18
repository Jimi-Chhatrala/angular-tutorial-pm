import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { NgFor } from '@angular/common';

@Component({
  imports: [NgFor],
  selector: 'app-student-data-comp',
  styleUrl: './student-data-comp.css',
  templateUrl: './student-data-comp.html',
  // providers: [StudentService]
})
export class StudentDataComp {
  studentsList: any;

  constructor(private studentService: StudentService) {
    this.studentsList = studentService.getStudents();
  }
}
