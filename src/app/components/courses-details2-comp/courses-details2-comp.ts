import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-courses-details2-comp',
  styleUrl: './courses-details2-comp.css',
  templateUrl: './courses-details2-comp.html',
})
export class CoursesDetails2Comp {
  constructor(private router: Router) {}

  close() {
    // this.router.navigate([{ outlets: { courses_details: null, courses_details_2: null } }]);
    this.router.navigate([{ outlets: { courses_details_2: null } }]);
  }
}
