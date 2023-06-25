import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfActiveFacetsComponent } from './olf-active-facets.component';

describe('OlfActiveFacetsComponent', () => {
  let component: OlfActiveFacetsComponent;
  let fixture: ComponentFixture<OlfActiveFacetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfActiveFacetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfActiveFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
