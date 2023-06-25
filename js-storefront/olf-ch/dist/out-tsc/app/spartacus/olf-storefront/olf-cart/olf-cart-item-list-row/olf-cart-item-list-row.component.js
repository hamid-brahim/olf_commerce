import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CartItemContextSource, CartItemListRowComponent } from '@spartacus/cart/base/components';
import { CartItemContext } from '@spartacus/cart/base/root';
let OlfCartItemListRowComponent = class OlfCartItemListRowComponent extends CartItemListRowComponent {
    constructor() {
        super(...arguments);
        this.showLabels = false;
    }
    toggleLabels(event) {
        // this.showLabels = !this.showLabels
        if (event.target.value == 'true') {
            this.showLabels = true;
        }
        else {
            this.showLabels = false;
        }
        console.log(this.showLabels);
    }
};
OlfCartItemListRowComponent = __decorate([
    Component({
        selector: '[app-olf-cart-item-list-row], app-olf-cart-item-list-row',
        templateUrl: './olf-cart-item-list-row.component.html',
        styleUrls: ['./olf-cart-item-list-row.component.scss'],
        providers: [
            CartItemContextSource,
            { provide: CartItemContext, useExisting: CartItemContextSource },
        ],
    })
], OlfCartItemListRowComponent);
export { OlfCartItemListRowComponent };
//# sourceMappingURL=olf-cart-item-list-row.component.js.map