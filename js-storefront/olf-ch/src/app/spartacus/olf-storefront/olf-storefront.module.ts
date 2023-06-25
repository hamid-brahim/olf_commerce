import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { MiniCartModule } from '@spartacus/cart/base/components/mini-cart';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfigModule,
  I18nModule
} from '@spartacus/core';
import {
  ActiveLinkCellComponent,
  CellComponent,
  OrganizationTableType,
  RolesCellComponent,
  StatusCellComponent
} from '@spartacus/organization/administration/components';
import { B2B_USER_NORMALIZER } from '@spartacus/organization/administration/core';
import {
  AddressFormModule, CardModule,
  FormErrorsModule, GlobalMessageComponentModule,
  IconConfig,
  IconResourceType,
  ICON_TYPE,
  KeyboardFocusModule, NgSelectA11yModule, OutletModule,
  OutletRefModule,
  PageLayoutModule,
  PageSlotModule,
  SkipLinkModule, SpinnerModule, TableConfig, VideoComponent
} from '@spartacus/storefront';
import { OlfOccB2bUserNormalizer } from './occ/converters/olf-occ-b2b-user-normalizer';
import {
  OlfCheckoutDeliveryAddressModule
} from "./olf-checkout/B2B/olf-checkout-delivery-address/olf-checkout-delivery-address.module";
import { OlfHomepageModule } from "./olf-homepage/olf-homepage.module";
import { OlfPdpModule } from "./olf-pdp/olf-pdp.module";
import { OlfPlpModule } from "./olf-plp/olf-plp.module";
import { OlfSearchboxModule } from "./olf-searchbox/olf-searchbox.module";
import { OlfStorefrontComponent } from './olf-storefront.component';

import { OlfAddressFormModule } from "./olf-account/olf-address-form/olf-address-form.module";
import { OlfCartModule } from "./olf-cart/olf-cart.module";
import { OlfOrganizationModule } from './olf-organization/olf-organization.module';
import { OlfPlaceOrderModule } from "./olf-place-order/olf-place-order.module";



@NgModule({
  declarations: [OlfStorefrontComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PageLayoutModule,
    PageSlotModule,
    KeyboardFocusModule,
    SkipLinkModule,
    MiniCartModule,
    AddressFormModule,
    SpinnerModule,
    CardModule,
    I18nModule,
    FormErrorsModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgSelectA11yModule,
    FeaturesConfigModule,
    OlfSearchboxModule,
    // OlfPdpModule,
    // OlfPlpModule,
    OlfHomepageModule,
    OlfCheckoutDeliveryAddressModule,
    OlfAddressFormModule,
    //OlfToggleStatusModule,
    //OlfUserDetailModule,
    OlfOrganizationModule,
    OlfCartModule,
    OlfPlaceOrderModule,
    ConfigModule.withConfig(<TableConfig>{
      table: {
        [OrganizationTableType.USER]: {
          cells: ['name', 'active', 'uid', 'roles'],
          options: {
            cells: {
              name: {
                dataComponent: ActiveLinkCellComponent,
              },
              active: {
                dataComponent: StatusCellComponent,
              },
              uid: {
                dataComponent: CellComponent,
              },
              roles: {
                dataComponent: RolesCellComponent,
              },
            },
          },
        },
      },
    }),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        VideoComponent: {
          component: VideoComponent,
        }
      }
    }),
    ConfigModule.withConfig(<IconConfig>{
      icon: {
        symbols: {
          MAIL: 'fa fa-envelope',
          LOCATION: 'fa fa-map-marker',
          PHONE: 'fa fa-phone',
          USER: 'account',
          BAG: 'fa fa-shopping-bag',
          BOLT: 'fa fa-bolt',
          FB: 'fab fa-facebook',
          LINKEDIN: 'fab fa-linkedin',
          INSTAGRAM: 'fab fa-instagram',
          TWITTER: 'fa-twitter',
          TIKTOK: 'fab fa-tiktok',
          CART: 'cart',
          LEFT: 'fab fa-left'
        },
        resources: [
          {
            type: IconResourceType.LINK,
            url: 'https://use.fontawesome.com/releases/v6.3.0/css/all.css',
          },
          {
            type: IconResourceType.SVG,
            url: './assets/icons-sheet.svg',
            types: [ICON_TYPE.INFO, ICON_TYPE.WARNING, 'USER', 'CART'],
          },
        ],
      },
    }),
  ],
  providers: [
    {
      provide: B2B_USER_NORMALIZER,
      useClass: OlfOccB2bUserNormalizer,
      multi: true,
    }
  ],
  exports: [OlfStorefrontComponent],
})
export class OlfStorefrontModule { }
