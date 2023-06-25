import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfHomepageGameTileComponent } from './olf-homepage-game-tile.component';

describe('OlfHomepageGameTileComponent', () => {
  let component: OlfHomepageGameTileComponent;
  let fixture: ComponentFixture<OlfHomepageGameTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfHomepageGameTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfHomepageGameTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
