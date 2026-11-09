import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-courses-details-comp',
  styleUrl: './courses-details-comp.css',
  templateUrl: './courses-details-comp.html',
})
export class CoursesDetailsComp {
  constructor(private router: Router) {}

  close() {
    this.router.navigate([{ outlets: { courses_details: null } }]);
  }
}
