import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfFacetListComponent } from './olf-facet-list.component';

describe('OlfFacetListComponent', () => {
  let component: OlfFacetListComponent;
  let fixture: ComponentFixture<OlfFacetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfFacetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfFacetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
