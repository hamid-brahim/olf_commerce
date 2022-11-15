import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHeaderComponent } from './mobile-header.component';
import {I18nTestingModule, UrlModule} from "@spartacus/core";
import {
  GenericLinkModule,
  HamburgerMenuModule,
  IconModule,
  MiniCartModule,
  PageSlotModule
} from "@spartacus/storefront";



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
