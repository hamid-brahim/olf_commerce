import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CheckoutPlaceOrderComponent } from '@spartacus/checkout/base/components';
let OlfPlaceOrderComponent = class OlfPlaceOrderComponent extends CheckoutPlaceOrderComponent {
    constructor() {
        super(...arguments);
        this.termsAndConditions = true;
    }
};
OlfPlaceOrderComponent = __decorate([
    Component({
        selector: 'app-olf-place-order',
        templateUrl: './olf-place-order.component.html',
        styleUrls: ['./olf-place-order.component.scss']
    })
], OlfPlaceOrderComponent);
export { OlfPlaceOrderComponent };
//# sourceMappingURL=olf-place-order.component.js.map