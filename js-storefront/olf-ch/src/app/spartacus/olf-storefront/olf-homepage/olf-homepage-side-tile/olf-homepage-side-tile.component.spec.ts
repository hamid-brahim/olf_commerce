import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfHomepageSideTileComponent } from './olf-homepage-side-tile.component';

describe('OlfHomepageSideTileComponent', () => {
  let component: OlfHomepageSideTileComponent;
  let fixture: ComponentFixture<OlfHomepageSideTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfHomepageSideTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfHomepageSideTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
