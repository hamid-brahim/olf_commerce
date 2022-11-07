import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfHeaderComponent } from './olf-header.component';

describe('OlfHeaderComponent', () => {
  let component: OlfHeaderComponent;
  let fixture: ComponentFixture<OlfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
