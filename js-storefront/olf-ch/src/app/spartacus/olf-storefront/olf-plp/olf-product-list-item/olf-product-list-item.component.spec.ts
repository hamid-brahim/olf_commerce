import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfProductListItemComponent } from './olf-product-list-item.component';

describe('OlfProductListItemComponent', () => {
  let component: OlfProductListItemComponent;
  let fixture: ComponentFixture<OlfProductListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfProductListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfProductListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
