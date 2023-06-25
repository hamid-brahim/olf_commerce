import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { savedCartTranslationChunksConfig, savedCartTranslations } from "@spartacus/cart/saved-cart/assets";
import { CART_SAVED_CART_FEATURE, SavedCartRootModule } from "@spartacus/cart/saved-cart/root";
import { provideConfig } from "@spartacus/core";
let CartSavedCartFeatureModule = class CartSavedCartFeatureModule {
};
CartSavedCartFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            SavedCartRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [CART_SAVED_CART_FEATURE]: {
                        module: () => import('@spartacus/cart/saved-cart').then((m) => m.SavedCartModule),
                    },
                }
            }),
            provideConfig({
                i18n: {
                    resources: savedCartTranslations,
                    chunks: savedCartTranslationChunksConfig,
                },
            })
        ]
    })
], CartSavedCartFeatureModule);
export { CartSavedCartFeatureModule };
//# sourceMappingURL=cart-saved-cart-feature.module.js.map