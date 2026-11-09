import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TShirtsProductsComp } from './tshirts-products-comp';

describe('TShirtsProductsComp', () => {
  let component: TShirtsProductsComp;
  let fixture: ComponentFixture<TShirtsProductsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TShirtsProductsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(TShirtsProductsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
