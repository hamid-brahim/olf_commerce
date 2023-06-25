import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfProductReferencesComponent } from './olf-product-references.component';

describe('OlfProductReferencesComponent', () => {
  let component: OlfProductReferencesComponent;
  let fixture: ComponentFixture<OlfProductReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfProductReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfProductReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
