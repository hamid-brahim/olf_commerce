import { __decorate } from "tslib";
import { I18nModule } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfProductIntroComponent } from './olf-product-intro/olf-product-intro.component';
import { ConfigModule } from '@spartacus/core';
import { OlfProductSummaryComponent } from './olf-product-summary/olf-product-summary.component';
import { AddToCartModule } from '@spartacus/cart/base/components/add-to-cart';
import { CarouselModule, MediaModule } from '@spartacus/storefront';
import { ProductReferencesModule } from '@spartacus/storefront';
import { OlfProductReferencesComponent } from './olf-product-references/olf-product-references.component';
import { UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
let OlfPdpModule = class OlfPdpModule {
};
OlfPdpModule = __decorate([
    NgModule({
        declarations: [
            OlfProductIntroComponent,
            OlfProductSummaryComponent,
            OlfProductReferencesComponent,
        ],
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    ProductIntroComponent: {
                        component: OlfProductIntroComponent
                    },
                    ProductSummaryComponent: {
                        component: OlfProductSummaryComponent
                    }
                }
            }),
            AddToCartModule,
            CarouselModule,
            I18nModule,
            ProductReferencesModule,
            UrlModule,
            MediaModule,
            RouterModule
        ],
        exports: [OlfProductIntroComponent, OlfProductSummaryComponent, OlfProductReferencesComponent
        ]
    })
], OlfPdpModule);
export { OlfPdpModule };
//# sourceMappingURL=olf-pdp.module.js.map