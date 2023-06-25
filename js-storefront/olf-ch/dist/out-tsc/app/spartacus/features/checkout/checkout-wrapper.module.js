import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CheckoutB2BModule } from "@spartacus/checkout/b2b";
import { CheckoutModule } from "@spartacus/checkout/base";
let CheckoutWrapperModule = class CheckoutWrapperModule {
};
CheckoutWrapperModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CheckoutModule,
            CheckoutB2BModule
        ]
    })
], CheckoutWrapperModule);
export { CheckoutWrapperModule };
//# sourceMappingURL=checkout-wrapper.module.js.map