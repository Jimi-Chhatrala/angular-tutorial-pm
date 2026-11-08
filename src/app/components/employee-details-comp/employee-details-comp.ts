import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-employee-details-comp',
  styleUrl: './employee-details-comp.css',
  templateUrl: './employee-details-comp.html',
})
export class EmployeeDetailsComp {
  public EmpID: any;
  public EmpName: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    this.EmpID = id;
    this.EmpName = name;
  }
}
