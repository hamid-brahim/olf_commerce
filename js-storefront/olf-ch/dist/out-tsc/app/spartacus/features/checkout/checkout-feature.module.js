import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { checkoutB2BTranslationChunksConfig, checkoutB2BTranslations } from "@spartacus/checkout/b2b/assets";
import { CheckoutB2BRootModule } from "@spartacus/checkout/b2b/root";
import { checkoutTranslationChunksConfig, checkoutTranslations } from "@spartacus/checkout/base/assets";
import { CheckoutRootModule, CHECKOUT_FEATURE } from "@spartacus/checkout/base/root";
import { CheckoutScheduledReplenishmentRootModule } from "@spartacus/checkout/scheduled-replenishment/root";
import { provideConfig } from "@spartacus/core";
let CheckoutFeatureModule = class CheckoutFeatureModule {
};
CheckoutFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CheckoutRootModule,
            CheckoutB2BRootModule,
            CheckoutScheduledReplenishmentRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [CHECKOUT_FEATURE]: {
                        module: () => import('./checkout-wrapper.module').then((m) => m.CheckoutWrapperModule),
                    },
                },
                cmsComponents: {
                    CheckoutDeliveryAddress: {
                        component: () => import('../../olf-storefront/olf-checkout/B2B/olf-checkout-delivery-address/olf-checkout-delivery-address.component').
                            then(m => m.OlfCheckoutDeliveryAddressComponent)
                    }
                }
            }),
            provideConfig({
                i18n: {
                    resources: checkoutTranslations,
                    chunks: checkoutTranslationChunksConfig,
                },
            }),
            provideConfig({
                i18n: {
                    resources: checkoutB2BTranslations,
                    chunks: checkoutB2BTranslationChunksConfig,
                },
            }),
        ]
    })
], CheckoutFeatureModule);
export { CheckoutFeatureModule };
//# sourceMappingURL=checkout-feature.module.js.map