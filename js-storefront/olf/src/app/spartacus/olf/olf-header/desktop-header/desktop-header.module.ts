import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MiniCartModule } from "@spartacus/cart/base/components/mini-cart";
import { UrlModule } from "@spartacus/core";
import { GenericLinkModule, IconModule, PageSlotModule, SearchBoxModule } from "@spartacus/storefront";
import { DesktopHeaderComponent } from './desktop-header.component';

@NgModule({
  imports: [
    CommonModule,
    GenericLinkModule,
    PageSlotModule,
    SearchBoxModule,
    IconModule,
    MiniCartModule,
    UrlModule,
    RouterModule
  ],
  declarations: [
    DesktopHeaderComponent
  ],
  exports: [
    DesktopHeaderComponent
  ]
})
export class DesktopHeaderModule { }
