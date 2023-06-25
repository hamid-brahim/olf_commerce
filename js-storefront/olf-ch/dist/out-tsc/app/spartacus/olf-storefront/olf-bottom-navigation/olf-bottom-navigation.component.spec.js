import { TestBed } from '@angular/core/testing';
import { OlfBottomNavigationComponent } from './olf-bottom-navigation.component';
describe('OlfBottomNavigationComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfBottomNavigationComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfBottomNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-bottom-navigation.component.spec.js.map