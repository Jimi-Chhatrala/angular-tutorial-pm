import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComp } from './courses-comp';

describe('CoursesComp', () => {
  let component: CoursesComp;
  let fixture: ComponentFixture<CoursesComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesComp],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
