import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfHomepageMainTileComponent } from './olf-homepage-main-tile.component';

describe('OlfHomepageMainTileComponent', () => {
  let component: OlfHomepageMainTileComponent;
  let fixture: ComponentFixture<OlfHomepageMainTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfHomepageMainTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfHomepageMainTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
