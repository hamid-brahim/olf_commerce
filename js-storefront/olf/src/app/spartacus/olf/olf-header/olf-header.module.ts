import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfHeaderComponent } from './olf-header.component';
import {DesktopHeaderModule} from "./desktop-header/desktop-header.module";
import {MobileHeaderModule} from "./mobile-header/mobile-header.module";
import { HamburgerMenuModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    OlfHeaderComponent
  ],
  imports: [
    CommonModule,
    DesktopHeaderModule,
    MobileHeaderModule
  ],
  exports: [
    OlfHeaderComponent
  ]
})
export class OlfHeaderModule { }
