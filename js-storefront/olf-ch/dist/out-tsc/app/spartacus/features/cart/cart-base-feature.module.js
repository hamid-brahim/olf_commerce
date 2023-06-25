import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { cartBaseTranslationChunksConfig, cartBaseTranslations } from "@spartacus/cart/base/assets";
import { ADD_TO_CART_FEATURE, CartBaseRootModule, CART_BASE_FEATURE, MINI_CART_FEATURE } from "@spartacus/cart/base/root";
import { provideConfig } from "@spartacus/core";
let CartBaseFeatureModule = class CartBaseFeatureModule {
};
CartBaseFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CartBaseRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [CART_BASE_FEATURE]: {
                        module: () => import('@spartacus/cart/base').then((m) => m.CartBaseModule),
                    },
                }
            }),
            provideConfig({
                featureModules: {
                    [MINI_CART_FEATURE]: {
                        module: () => import('@spartacus/cart/base/components/mini-cart').then((m) => m.MiniCartModule),
                    },
                }
            }),
            provideConfig({
                featureModules: {
                    [ADD_TO_CART_FEATURE]: {
                        module: () => import('@spartacus/cart/base/components/add-to-cart').then((m) => m.AddToCartModule),
                    },
                }
            }),
            provideConfig({
                i18n: {
                    resources: cartBaseTranslations,
                    chunks: cartBaseTranslationChunksConfig,
                },
            })
        ]
    })
], CartBaseFeatureModule);
export { CartBaseFeatureModule };
//# sourceMappingURL=cart-base-feature.module.js.map