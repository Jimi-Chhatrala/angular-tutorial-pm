import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [NgFor],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  users = [
    {
      id: 1,
      name: 'Abc',
      age: 18,
      isMarried: true,
      hobbies: ['Reading', 'Writing', 'Singing'],
    },
    {
      id: 2,
      name: 'Def',
      age: 19,
      isMarried: false,
      hobbies: ['Dancing', 'Sleeping', 'Racing'],
    },
    {
      id: 3,
      name: 'Ghi',
      age: 20,
      isMarried: true,
      hobbies: ['Coding', 'Teaching', 'Content Creator'],
    },
  ];

  departments = [
    {
      name: 'IT',
      employees: ['John', 'Alice'],
    },
    {
      name: 'HR',
      employees: ['Bob', 'David'],
    },
  ];

  departments_1 = [
    {
      name: 'IT',
      employees: [
        { name: 'John', age: 17 },
        { name: 'Alice', age: 28 },
      ],
    },
    {
      name: 'HR',
      employees: [
        { name: 'Bob', age: 30 },
        { name: 'David', age: 16 },
      ],
    },
  ];

  universities = [
    {
      name: 'ABC University',
      departments: [
        {
          name: 'Computer Science',
          courses: [
            {
              name: 'Angular',
              students: ['John', 'Alice'],
            },
            {
              name: 'Java',
              students: ['Bob', 'David'],
            },
          ],
        },
      ],
    },
  ];
}
