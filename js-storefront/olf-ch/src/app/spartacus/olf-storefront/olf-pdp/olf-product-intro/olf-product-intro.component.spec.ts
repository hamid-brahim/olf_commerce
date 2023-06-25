import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfProductIntroComponent } from './olf-product-intro.component';

describe('OlfProductIntroComponent', () => {
  let component: OlfProductIntroComponent;
  let fixture: ComponentFixture<OlfProductIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfProductIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfProductIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
