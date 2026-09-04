import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineStyleComp } from './inline-style-comp';

describe('InlineStyleComp', () => {
  let component: InlineStyleComp;
  let fixture: ComponentFixture<InlineStyleComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineStyleComp],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineStyleComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
