import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { NgFor } from '@angular/common';

@Component({
  imports: [NgFor],
  selector: 'app-student-list-comp',
  styleUrl: './student-list-comp.css',
  templateUrl: './student-list-comp.html',
  // providers: [StudentService],
})
export class StudentListComp {
  studentsList: any;

  constructor(private studentService: StudentService) {
    this.studentsList = studentService.getStudents();
  }
}
