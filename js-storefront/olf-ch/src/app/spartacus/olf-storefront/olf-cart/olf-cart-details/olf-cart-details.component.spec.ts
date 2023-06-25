import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfCartDetailsComponent } from './olf-cart-details.component';

describe('OlfCartDetailsComponent', () => {
  let component: OlfCartDetailsComponent;
  let fixture: ComponentFixture<OlfCartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfCartDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
