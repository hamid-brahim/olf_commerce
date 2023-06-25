import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfCartItemComponent } from './olf-cart-item.component';

describe('OlfCartItemComponent', () => {
  let component: OlfCartItemComponent;
  let fixture: ComponentFixture<OlfCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfCartItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
