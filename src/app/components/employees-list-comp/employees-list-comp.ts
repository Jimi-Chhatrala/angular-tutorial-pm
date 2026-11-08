import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [NgFor],
  selector: 'app-employees-list-comp',
  styleUrl: './employees-list-comp.css',
  templateUrl: './employees-list-comp.html',
})
export class EmployeesListComp {
  MyEmployees = [
    { id: 1, name: 'Abc' },
    { id: 2, name: 'Def' },
    { id: 3, name: 'Ghi' },
    { id: 4, name: 'Jkl' },
    { id: 5, name: 'Mno' },
  ];

  constructor(private router: Router) {}

  EmpClick(employee: any) {
    this.router.navigate(['/employees', employee.id, employee.name]);
  }
}
