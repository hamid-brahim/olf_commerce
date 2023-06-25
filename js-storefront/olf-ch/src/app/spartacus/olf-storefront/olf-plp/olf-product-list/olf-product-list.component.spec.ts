import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfProductListComponent } from './olf-product-list.component';

describe('OlfProductListComponent', () => {
  let component: OlfProductListComponent;
  let fixture: ComponentFixture<OlfProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
