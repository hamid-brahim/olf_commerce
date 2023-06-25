import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { B2BCheckoutDeliveryAddressComponent } from "@spartacus/checkout/b2b/components";
let OlfCheckoutDeliveryAddressComponent = class OlfCheckoutDeliveryAddressComponent extends B2BCheckoutDeliveryAddressComponent {
    showNewAddressForm() {
        this.addressFormOpened = true;
    }
};
OlfCheckoutDeliveryAddressComponent = __decorate([
    Component({
        selector: 'app-olf-checkout-delivery-address',
        templateUrl: './olf-checkout-delivery-address.component.html',
        styleUrls: ['./olf-checkout-delivery-address.component.scss']
    })
], OlfCheckoutDeliveryAddressComponent);
export { OlfCheckoutDeliveryAddressComponent };
//# sourceMappingURL=olf-checkout-delivery-address.component.js.map