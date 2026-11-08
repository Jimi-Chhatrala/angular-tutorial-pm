import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-employee-details-comp',
  styleUrl: './employee-details-comp.css',
  templateUrl: './employee-details-comp.html',
})
export class EmployeeDetailsComp {
  public EmpID: any;
  public EmpName: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // let name = this.activatedRoute.snapshot.paramMap.get('name');
    // this.EmpID = id;
    // this.EmpName = name;
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.EmpID = id;
    });
  }

  PreviousEmp() {
    let previousId = parseInt(this.EmpID) - 1;
    this.router.navigate(['/employees', previousId]);
  }

  NextEmp() {
    let nextId = parseInt(this.EmpID) + 1;
    this.router.navigate(['/employees', nextId]);
  }

  goToEmployees() {
    let selectedID = this.EmpID;
    this.router.navigate(['/employees', { id: selectedID }]);
  }
}
