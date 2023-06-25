import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@spartacus/core';
import { OlfCheckoutDeliveryAddressComponent } from "./olf-checkout-delivery-address.component";
import { OlfAddressFormModule } from "../../../olf-account/olf-address-form/olf-address-form.module";
import { CardModule, SpinnerModule } from "@spartacus/storefront";
let OlfCheckoutDeliveryAddressModule = class OlfCheckoutDeliveryAddressModule {
};
OlfCheckoutDeliveryAddressModule = __decorate([
    NgModule({
        declarations: [OlfCheckoutDeliveryAddressComponent],
        imports: [
            CommonModule,
            I18nModule,
            OlfAddressFormModule,
            SpinnerModule,
            CardModule
        ]
    })
], OlfCheckoutDeliveryAddressModule);
export { OlfCheckoutDeliveryAddressModule };
//# sourceMappingURL=olf-checkout-delivery-address.module.js.map