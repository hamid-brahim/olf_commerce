import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfCartItemListRowComponent } from './olf-cart-item-list-row.component';

describe('OlfCartItemListRowComponent', () => {
  let component: OlfCartItemListRowComponent;
  let fixture: ComponentFixture<OlfCartItemListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfCartItemListRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfCartItemListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
