import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Inline3Comp } from './inline3-comp';

describe('Inline3Comp', () => {
  let component: Inline3Comp;
  let fixture: ComponentFixture<Inline3Comp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inline3Comp],
    }).compileComponents();

    fixture = TestBed.createComponent(Inline3Comp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
