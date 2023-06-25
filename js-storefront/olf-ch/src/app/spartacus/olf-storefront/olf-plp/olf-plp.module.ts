import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfProductListComponent } from './olf-product-list/olf-product-list.component';
import { OlfProductListItemComponent } from './olf-product-list-item/olf-product-list-item.component';
import {
  ConfigModule,
  FeaturesConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { RouterModule } from '@angular/router';
import {
  ActiveFacetsModule,
  FacetListModule,
  FacetModule,
  IconModule,
  ItemCounterModule,
  ListNavigationModule,
  MediaModule,
  OutletModule,
  ProductListModule,
  SpinnerModule,
  StarRatingModule,
} from '@spartacus/storefront';
import { AddToCartModule } from '@spartacus/cart/base/components/add-to-cart';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OlfFacetListComponent } from './olf-facet-list/olf-facet-list.component';
import { OlfFacetComponent } from './olf-facet/olf-facet.component';
import { OlfFacetNavigationComponent } from './olf-facet-navigation/olf-facet-navigation.component';
import { OlfActiveFacetsComponent } from './olf-active-facets/olf-active-facets.component';

interface Product {
  EAN?: string;
  availabilityColor?: string;
  availabilityMessage?: string;
  author?: string;
}

@NgModule({
  declarations: [
    OlfProductListComponent,
    OlfProductListItemComponent,
    OlfFacetListComponent,
    OlfFacetComponent,
    OlfFacetNavigationComponent,
    OlfActiveFacetsComponent,
  ],
  imports: [
    CommonModule,
    I18nModule,
    RouterModule,
    MediaModule,
    AddToCartModule,
    ItemCounterModule,
    ListNavigationModule,
    UrlModule,
    StarRatingModule,
    IconModule,
    SpinnerModule,
    InfiniteScrollModule,
    FeaturesConfigModule,
    ProductListModule,
    OutletModule,
    FacetModule,
    FacetListModule,
    ActiveFacetsModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CMSProductListComponent: {
          component: OlfProductListComponent,
        },
        SearchResultsListComponent: {
          // uses same component as CMSProductListComponent
          component: OlfProductListComponent,
        },
        ProductRefinementComponent: {
          component: OlfFacetNavigationComponent,
        },
      },
    }),
  ],

  exports: [OlfProductListComponent, OlfProductListItemComponent],
})
export class OlfPlpModule {}
