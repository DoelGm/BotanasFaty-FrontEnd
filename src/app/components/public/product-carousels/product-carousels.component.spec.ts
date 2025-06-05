import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarouselsComponent } from './product-carousels.component';

describe('ProductCarouselsComponent', () => {
  let component: ProductCarouselsComponent;
  let fixture: ComponentFixture<ProductCarouselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCarouselsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
