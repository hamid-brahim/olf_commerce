import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfFooterComponent } from './olf-footer.component';
import {ConfigModule, I18nModule} from "@spartacus/core";
import {footerCmsConfig} from "./config/footer.config";
import {IconModule, NavigationModule} from "@spartacus/storefront";

declare module '@spartacus/storefront' {
  interface NavigationNode {
    uid?: string;
  }
}

@NgModule({
  declarations: [
    OlfFooterComponent
  ],
  imports: [
    CommonModule, ConfigModule.withConfig(footerCmsConfig), IconModule, NavigationModule, I18nModule
  ],
  exports: [
    OlfFooterComponent
  ]
})
export class OlfFooterModule { }
