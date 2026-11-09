import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesDetails2Comp } from './courses-details2-comp';

describe('CoursesDetails2Comp', () => {
  let component: CoursesDetails2Comp;
  let fixture: ComponentFixture<CoursesDetails2Comp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesDetails2Comp],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesDetails2Comp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
