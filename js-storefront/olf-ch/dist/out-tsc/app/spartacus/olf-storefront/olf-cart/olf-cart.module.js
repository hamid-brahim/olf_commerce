import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfCartDetailsComponent } from './olf-cart-details/olf-cart-details.component';
import { OlfCartItemListComponent } from './olf-cart-item-list/olf-cart-item-list.component';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { OlfCartItemComponent } from './olf-cart-item/olf-cart-item.component';
import { CartCouponModule, CartProceedToCheckoutModule, CartValidationWarningsModule } from '@spartacus/cart/base/components';
import { RouterModule } from '@angular/router';
import { ItemCounterModule, MediaModule, OutletModule, PromotionsModule } from '@spartacus/storefront';
import { OlfCartItemListRowComponent } from './olf-cart-item-list-row/olf-cart-item-list-row.component';
import { OlfCartTotalsComponent } from './olf-cart-totals/olf-cart-totals.component';
import { OlfOrderSummaryComponent } from './olf-order-summary/olf-order-summary.component';
import { CartQuickOrderFormModule } from '@spartacus/cart/quick-order/components';
let OlfCartModule = class OlfCartModule {
};
OlfCartModule = __decorate([
    NgModule({
        declarations: [
            OlfCartDetailsComponent,
            OlfCartItemListComponent,
            OlfCartItemComponent,
            OlfCartItemListRowComponent,
            OlfCartTotalsComponent,
            OlfOrderSummaryComponent
        ],
        imports: [
            CommonModule,
            I18nModule,
            PromotionsModule,
            ItemCounterModule,
            RouterModule,
            MediaModule,
            UrlModule,
            OutletModule,
            CartQuickOrderFormModule,
            CartProceedToCheckoutModule,
            CartCouponModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    CartComponent: {
                        component: OlfCartDetailsComponent,
                    },
                    CartTotalsComponent: {
                        component: OlfCartTotalsComponent,
                        data: {
                            otherProperties: "Cart"
                        }
                    },
                    AccountOrderDetailsTotalsComponent: {
                        component: OlfCartTotalsComponent,
                        data: {
                            otherProperties: "Account"
                        }
                    },
                }
            }),
            CartValidationWarningsModule,
        ],
        providers: [],
        exports: [],
    })
], OlfCartModule);
export { OlfCartModule };
//# sourceMappingURL=olf-cart.module.js.map