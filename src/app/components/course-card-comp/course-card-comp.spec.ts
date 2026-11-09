import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComp } from './course-card-comp';

describe('CourseCardComp', () => {
  let component: CourseCardComp;
  let fixture: ComponentFixture<CourseCardComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComp],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
