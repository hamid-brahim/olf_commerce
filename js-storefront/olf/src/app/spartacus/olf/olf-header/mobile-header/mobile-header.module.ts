import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {GenericLinkModule, HamburgerMenuModule, IconModule, PageSlotModule} from "@spartacus/storefront";
import {I18nModule, UrlModule} from "@spartacus/core";
import {MiniCartModule} from "@spartacus/cart/base/components/mini-cart";
import {MobileHeaderComponent} from "./mobile-header.component";



@NgModule({
  declarations: [
    MobileHeaderComponent
  ],
  imports: [
    CommonModule,
    GenericLinkModule,
    UrlModule,
    PageSlotModule,
    HamburgerMenuModule,
    IconModule,
    MiniCartModule,
    I18nModule
  ],
  exports: [
    MobileHeaderComponent
  ]
})
export class MobileHeaderModule { }
