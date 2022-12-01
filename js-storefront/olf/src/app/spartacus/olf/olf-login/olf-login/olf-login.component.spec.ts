import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfLoginComponent } from './olf-login.component';

describe('OlfLoginComponent', () => {
  let component: OlfLoginComponent;
  let fixture: ComponentFixture<OlfLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
