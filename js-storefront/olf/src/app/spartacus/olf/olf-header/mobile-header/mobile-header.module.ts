import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHeaderComponent } from './mobile-header.component';
import {UrlModule} from "@spartacus/core";
import {GenericLinkModule, HamburgerMenuModule, IconModule, PageSlotModule} from "@spartacus/storefront";



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
    IconModule
  ],
  exports: [
    MobileHeaderComponent
  ]
})
export class MobileHeaderModule { }
