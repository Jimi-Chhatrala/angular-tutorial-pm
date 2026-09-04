import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Inline2Comp } from './inline2-comp';

describe('Inline2Comp', () => {
  let component: Inline2Comp;
  let fixture: ComponentFixture<Inline2Comp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inline2Comp],
    }).compileComponents();

    fixture = TestBed.createComponent(Inline2Comp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
