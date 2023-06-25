import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartTotalsComponent } from '@spartacus/cart/base/components';
let OlfCartTotalsComponent = class OlfCartTotalsComponent extends CartTotalsComponent {
    constructor(activeCartFacade, component) {
        super(activeCartFacade);
        component.data$.subscribe(data => {
            this.data = data.otherProperties;
        });
    }
};
OlfCartTotalsComponent = __decorate([
    Component({
        selector: 'app-olf-cart-totals',
        templateUrl: './olf-cart-totals.component.html',
        styleUrls: ['./olf-cart-totals.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], OlfCartTotalsComponent);
export { OlfCartTotalsComponent };
//# sourceMappingURL=olf-cart-totals.component.js.map