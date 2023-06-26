import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MiniCartModule } from "@spartacus/cart/base/components/mini-cart";
import { I18nTestingModule, UrlModule } from "@spartacus/core";
import {
  GenericLinkModule,
  HamburgerMenuModule,
  IconModule,
  PageSlotModule
} from "@spartacus/storefront";
import { MobileHeaderComponent } from './mobile-header.component';

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
    I18nTestingModule
  ],
  exports: [
    MobileHeaderComponent
  ]
})
export class MobileHeaderModule { }
