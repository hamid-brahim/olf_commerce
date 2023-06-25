import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfFacetNavigationComponent } from './olf-facet-navigation.component';

describe('OlfFacetNavigationComponent', () => {
  let component: OlfFacetNavigationComponent;
  let fixture: ComponentFixture<OlfFacetNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfFacetNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfFacetNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
