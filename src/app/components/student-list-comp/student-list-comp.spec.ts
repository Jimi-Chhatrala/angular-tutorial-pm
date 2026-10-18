import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentListComp } from './student-list-comp';

describe('StudentListComp', () => {
  let component: StudentListComp;
  let fixture: ComponentFixture<StudentListComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListComp],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentListComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
