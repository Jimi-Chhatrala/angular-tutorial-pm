import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeesListComp } from './employees-list-comp';

describe('EmployeesListComp', () => {
  let component: EmployeesListComp;
  let fixture: ComponentFixture<EmployeesListComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesListComp],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeesListComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
