import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { productImageZoomTranslationChunksConfig, productImageZoomTranslations } from "@spartacus/product/image-zoom/assets";
import { ProductImageZoomRootModule, PRODUCT_IMAGE_ZOOM_FEATURE } from "@spartacus/product/image-zoom/root";
let ProductImageZoomFeatureModule = class ProductImageZoomFeatureModule {
};
ProductImageZoomFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            ProductImageZoomRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [PRODUCT_IMAGE_ZOOM_FEATURE]: {
                        module: () => import('@spartacus/product/image-zoom').then((m) => m.ProductImageZoomModule),
                    },
                }
            }),
            provideConfig({
                i18n: {
                    resources: productImageZoomTranslations,
                    chunks: productImageZoomTranslationChunksConfig,
                },
            })
        ]
    })
], ProductImageZoomFeatureModule);
export { ProductImageZoomFeatureModule };
//# sourceMappingURL=product-image-zoom-feature.module.js.map