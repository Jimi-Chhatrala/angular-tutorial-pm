import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineTemplateAndStyleComp } from './inline-template-and-style-comp';

describe('InlineTemplateAndStyleComp', () => {
  let component: InlineTemplateAndStyleComp;
  let fixture: ComponentFixture<InlineTemplateAndStyleComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineTemplateAndStyleComp],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineTemplateAndStyleComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
