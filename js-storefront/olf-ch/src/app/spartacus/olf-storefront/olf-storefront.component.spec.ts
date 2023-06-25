import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfStorefrontComponent } from './olf-storefront.component';

describe('OlfStorefrontComponent', () => {
  let component: OlfStorefrontComponent;
  let fixture: ComponentFixture<OlfStorefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfStorefrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfStorefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
