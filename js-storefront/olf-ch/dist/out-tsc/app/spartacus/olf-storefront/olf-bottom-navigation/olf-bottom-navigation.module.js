import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UrlModule } from '@spartacus/core';
import { HamburgerMenuModule, IconModule } from '@spartacus/storefront';
import { OlfBottomNavigationComponent } from './olf-bottom-navigation.component';
let OlfBottomNavigationModule = class OlfBottomNavigationModule {
};
OlfBottomNavigationModule = __decorate([
    NgModule({
        declarations: [
            OlfBottomNavigationComponent
        ],
        imports: [
            CommonModule,
            IconModule,
            UrlModule,
            HamburgerMenuModule,
        ],
        exports: [
            OlfBottomNavigationComponent
        ]
    })
], OlfBottomNavigationModule);
export { OlfBottomNavigationModule };
//# sourceMappingURL=olf-bottom-navigation.module.js.map