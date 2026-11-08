import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDetailsComp } from './employee-details-comp';

describe('EmployeeDetailsComp', () => {
  let component: EmployeeDetailsComp;
  let fixture: ComponentFixture<EmployeeDetailsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDetailsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
