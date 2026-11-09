import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopProductsComp } from './top-products-comp';

describe('TopProductsComp', () => {
  let component: TopProductsComp;
  let fixture: ComponentFixture<TopProductsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopProductsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(TopProductsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
