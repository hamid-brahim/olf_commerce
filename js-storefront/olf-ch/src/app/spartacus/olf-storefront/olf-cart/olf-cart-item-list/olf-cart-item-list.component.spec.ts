import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfCartItemListComponent } from './olf-cart-item-list.component';

describe('OlfCartItemListComponent', () => {
  let component: OlfCartItemListComponent;
  let fixture: ComponentFixture<OlfCartItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfCartItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfCartItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
