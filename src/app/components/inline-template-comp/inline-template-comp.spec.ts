import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineTemplateComp } from './inline-template-comp';

describe('InlineTemplateComp', () => {
  let component: InlineTemplateComp;
  let fixture: ComponentFixture<InlineTemplateComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineTemplateComp],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineTemplateComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
