import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrousersProductsComp } from './trousers-products-comp';

describe('TrousersProductsComp', () => {
  let component: TrousersProductsComp;
  let fixture: ComponentFixture<TrousersProductsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrousersProductsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(TrousersProductsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
