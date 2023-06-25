import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfFacetComponent } from './olf-facet.component';

describe('OlfFacetComponent', () => {
  let component: OlfFacetComponent;
  let fixture: ComponentFixture<OlfFacetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfFacetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfFacetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
