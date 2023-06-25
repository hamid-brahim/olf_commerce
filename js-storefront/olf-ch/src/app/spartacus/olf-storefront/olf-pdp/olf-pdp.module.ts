import {CmsConfig, I18nModule, Language} from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfProductIntroComponent } from './olf-product-intro/olf-product-intro.component';
import { ConfigModule } from '@spartacus/core';
import { OlfProductSummaryComponent } from './olf-product-summary/olf-product-summary.component';
import { AddToCartModule } from '@spartacus/cart/base/components/add-to-cart';
import { CarouselModule, MediaModule } from '@spartacus/storefront';
import { ProductReferencesModule } from '@spartacus/storefront';
import { OlfProductReferencesComponent } from './olf-product-references/olf-product-references.component';
import { UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';

declare module '@spartacus/core' {
  interface Product {
    EAN?: string;
    ultimate?: boolean;
    availabilityColor?: string;
    publisher?: string;
    format?: string;
    pages?: string;
    width?: string;
    height?: string;
    thickness?: string;
    weight?: string;
    language?: Language;
    category?: string;
    publicationDate?: Date;
    availabilityMessage?: string;
    subtitle?: string;
    author?: string;
  }
}

@NgModule({
  declarations: [
    OlfProductIntroComponent,
    OlfProductSummaryComponent,
    OlfProductReferencesComponent,
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: OlfProductIntroComponent
        },
        ProductSummaryComponent: {
          component: OlfProductSummaryComponent
        }
      }
    } as CmsConfig),
    AddToCartModule,
    CarouselModule,
    I18nModule,
    ProductReferencesModule,
    UrlModule,
    MediaModule,
    RouterModule
  ],
  exports: [OlfProductIntroComponent,OlfProductSummaryComponent,OlfProductReferencesComponent
  ]
})
export class OlfPdpModule { }
