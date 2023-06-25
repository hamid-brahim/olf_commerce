import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfCartDetailsComponent } from './olf-cart-details/olf-cart-details.component';
import { OlfCartItemListComponent } from './olf-cart-item-list/olf-cart-item-list.component';
import { ConfigModule, CmsConfig, I18nModule, UrlModule } from '@spartacus/core';
import { OlfCartItemComponent } from './olf-cart-item/olf-cart-item.component';
import {
  CartCouponModule,
  CartProceedToCheckoutModule,
  CartValidationWarningsModule
} from '@spartacus/cart/base/components';
import { RouterModule } from '@angular/router';
import { ItemCounterModule, MediaModule, OutletModule, PromotionsModule } from '@spartacus/storefront';
import { OlfCartItemListRowComponent } from './olf-cart-item-list-row/olf-cart-item-list-row.component';
import { OlfCartTotalsComponent } from './olf-cart-totals/olf-cart-totals.component';
import { OlfOrderSummaryComponent } from './olf-order-summary/olf-order-summary.component';
import { CartQuickOrderFormModule } from '@spartacus/cart/quick-order/components';
import { OlfEmptyModalCartComponent } from './olf-cart-modal/olf-empty-modal-cart/olf-empty-modal-cart.component';
import { OlfFilledModalCartComponent } from './olf-cart-modal/olf-filled-modal-cart/olf-filled-modal-cart.component';

@NgModule({
  declarations: [
    OlfCartDetailsComponent,
    OlfCartItemListComponent,
    OlfCartItemComponent,
    OlfCartItemListRowComponent,
    OlfCartTotalsComponent,
    OlfOrderSummaryComponent,
    OlfEmptyModalCartComponent,
    OlfFilledModalCartComponent
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
    } as CmsConfig),
    CartValidationWarningsModule,
  ],
  providers: [

  ],
  exports: [
  
    OlfEmptyModalCartComponent,
       OlfFilledModalCartComponent
  ],
})
export class OlfCartModule { }
