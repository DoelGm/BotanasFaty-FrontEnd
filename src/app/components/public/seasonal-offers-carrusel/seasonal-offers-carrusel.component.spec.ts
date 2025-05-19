import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalOffersCarruselComponent } from './seasonal-offers-carrusel.component';

describe('SeasonalOffersCarruselComponent', () => {
  let component: SeasonalOffersCarruselComponent;
  let fixture: ComponentFixture<SeasonalOffersCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonalOffersCarruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalOffersCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
