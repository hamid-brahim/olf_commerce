import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { I18nModule } from '@spartacus/core';
import { GlobalMessageComponentModule, OutletModule, OutletRefModule, PageLayoutModule, PageSlotModule, SkipLinkModule,  KeyboardFocusModule, } from "@spartacus/storefront";
import { OlfHeaderModule } from './olf-header/olf-header.module';
import {OlfLoginModule} from "./olf-login/olf-login/olf-login.module";
import { OlfComponent } from './olf.component';





@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    RouterModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    KeyboardFocusModule,
    PageLayoutModule,
    SkipLinkModule,
    PageSlotModule,
    OlfHeaderModule,
    OlfLoginModule
  ],
  declarations: [
    OlfComponent
  ],

  exports: [
    OlfComponent
  ]
})
export class OlfModule { }
