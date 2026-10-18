import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentDataComp } from './student-data-comp';

describe('StudentDataComp', () => {
  let component: StudentDataComp;
  let fixture: ComponentFixture<StudentDataComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDataComp],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentDataComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
