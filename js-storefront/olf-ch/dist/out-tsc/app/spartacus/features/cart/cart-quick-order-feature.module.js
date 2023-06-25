import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CART_QUICK_ORDER_FEATURE, QuickOrderRootModule } from "@spartacus/cart/quick-order/root";
import { provideConfig } from "@spartacus/core";
let CartQuickOrderFeatureModule = class CartQuickOrderFeatureModule {
};
CartQuickOrderFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            QuickOrderRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [CART_QUICK_ORDER_FEATURE]: {
                        module: () => import('@spartacus/cart/quick-order').then((m) => m.QuickOrderModule),
                    },
                }
            }),
        ]
    })
], CartQuickOrderFeatureModule);
export { CartQuickOrderFeatureModule };
//# sourceMappingURL=cart-quick-order-feature.module.js.map