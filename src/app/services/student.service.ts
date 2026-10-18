import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  getStudents() {
    return [
      {
        name: 'Abc',
        age: 21,
        class: 12,
      },
      {
        name: 'Def',
        age: 19,
        class: 11,
      },
      {
        name: 'Ghi',
        age: 18,
        class: 10,
      },
    ];
  }
}
