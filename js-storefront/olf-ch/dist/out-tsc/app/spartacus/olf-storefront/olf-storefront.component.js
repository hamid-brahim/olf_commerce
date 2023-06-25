import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { StorefrontComponent } from '@spartacus/storefront';
import { ProductListOutlets } from '@spartacus/storefront';
let OlfStorefrontComponent = class OlfStorefrontComponent extends StorefrontComponent {
    constructor() {
        super(...arguments);
        this.productListOutlets = ProductListOutlets;
    }
};
OlfStorefrontComponent = __decorate([
    Component({
        selector: 'app-olf-storefront',
        templateUrl: './olf-storefront.component.html',
        styleUrls: ['./olf-storefront.component.scss']
    })
], OlfStorefrontComponent);
export { OlfStorefrontComponent };
//# sourceMappingURL=olf-storefront.component.js.map