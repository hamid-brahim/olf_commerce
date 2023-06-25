import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfUserDetailComponent } from './olf-user-detail.component';

describe('OlfUserDetailComponent', () => {
  let component: OlfUserDetailComponent;
  let fixture: ComponentFixture<OlfUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfUserDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
