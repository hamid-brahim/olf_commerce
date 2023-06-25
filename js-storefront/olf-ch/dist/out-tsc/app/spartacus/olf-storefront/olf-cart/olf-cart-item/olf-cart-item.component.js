import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CartItemComponent, CartItemContextSource } from '@spartacus/cart/base/components';
import { CartItemContext } from '@spartacus/cart/base/root';
let OlfCartItemComponent = class OlfCartItemComponent extends CartItemComponent {
};
OlfCartItemComponent = __decorate([
    Component({
        selector: 'app-olf-cart-item',
        templateUrl: './olf-cart-item.component.html',
        providers: [
            CartItemContextSource,
            { provide: CartItemContext, useExisting: CartItemContextSource },
        ],
    })
], OlfCartItemComponent);
export { OlfCartItemComponent };
//# sourceMappingURL=olf-cart-item.component.js.map