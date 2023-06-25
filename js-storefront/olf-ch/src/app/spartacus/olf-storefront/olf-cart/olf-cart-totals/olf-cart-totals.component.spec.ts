import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfCartTotalsComponent } from './olf-cart-totals.component';

describe('OlfCartTotalsComponent', () => {
  let component: OlfCartTotalsComponent;
  let fixture: ComponentFixture<OlfCartTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfCartTotalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfCartTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
