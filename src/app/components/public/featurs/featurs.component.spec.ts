import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatursComponent } from './featurs.component';

describe('FeatursComponent', () => {
  let component: FeatursComponent;
  let fixture: ComponentFixture<FeatursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
