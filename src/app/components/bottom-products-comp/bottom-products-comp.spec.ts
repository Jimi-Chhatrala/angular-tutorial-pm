import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomProductsComp } from './bottom-products-comp';

describe('BottomProductsComp', () => {
  let component: BottomProductsComp;
  let fixture: ComponentFixture<BottomProductsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomProductsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomProductsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
