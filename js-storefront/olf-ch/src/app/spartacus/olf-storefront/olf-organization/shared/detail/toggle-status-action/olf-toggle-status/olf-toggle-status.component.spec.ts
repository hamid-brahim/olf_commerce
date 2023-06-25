import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfToggleStatusComponent } from './olf-toggle-status.component';

describe('OlfToggleStatusComponent', () => {
  let component: OlfToggleStatusComponent;
  let fixture: ComponentFixture<OlfToggleStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfToggleStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfToggleStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
