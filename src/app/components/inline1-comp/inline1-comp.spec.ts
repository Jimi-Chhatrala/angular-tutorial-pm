import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Inline1Comp } from './inline1-comp';

describe('Inline1Comp', () => {
  let component: Inline1Comp;
  let fixture: ComponentFixture<Inline1Comp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inline1Comp],
    }).compileComponents();

    fixture = TestBed.createComponent(Inline1Comp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
