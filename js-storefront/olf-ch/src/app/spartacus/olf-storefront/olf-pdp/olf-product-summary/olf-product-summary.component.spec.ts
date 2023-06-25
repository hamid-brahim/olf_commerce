import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfProductSummaryComponent } from './olf-product-summary.component';

describe('OlfProductSummaryComponent', () => {
  let component: OlfProductSummaryComponent;
  let fixture: ComponentFixture<OlfProductSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfProductSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
