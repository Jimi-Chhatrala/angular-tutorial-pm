import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesDetailsComp } from './courses-details-comp';

describe('CoursesDetailsComp', () => {
  let component: CoursesDetailsComp;
  let fixture: ComponentFixture<CoursesDetailsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesDetailsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesDetailsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
