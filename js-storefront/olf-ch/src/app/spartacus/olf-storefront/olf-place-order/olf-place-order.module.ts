import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfPlaceOrderComponent } from './olf-place-order.component';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AtMessageModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    OlfPlaceOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    UrlModule,
    ReactiveFormsModule,
    AtMessageModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CheckoutPlaceOrder: {
          component: OlfPlaceOrderComponent
        },
      }
    })
  ],
})
export class OlfPlaceOrderModule { }
