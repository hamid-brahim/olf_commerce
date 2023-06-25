import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfOrderSummaryComponent } from './olf-order-summary.component';

describe('OlfOrderSummaryComponent', () => {
  let component: OlfOrderSummaryComponent;
  let fixture: ComponentFixture<OlfOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfOrderSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
