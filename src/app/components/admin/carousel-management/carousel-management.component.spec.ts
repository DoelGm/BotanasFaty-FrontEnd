import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselManagementComponent } from './carousel-management.component';

describe('CarouselManagementComponent', () => {
  let component: CarouselManagementComponent;
  let fixture: ComponentFixture<CarouselManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
