import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-employee-details-comp',
  styleUrl: './employee-details-comp.css',
  templateUrl: './employee-details-comp.html',
})
export class EmployeeDetailsComp {
  public EmpID: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.EmpID = id;
  }
}
