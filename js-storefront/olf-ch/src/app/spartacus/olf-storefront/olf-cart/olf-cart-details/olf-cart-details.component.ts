import { Component } from '@angular/core';
import { CartDetailsComponent } from '@spartacus/cart/base/components';
import { CartConfigService } from '@spartacus/cart/base/core';
import { ActiveCartFacade, SelectiveCartFacade } from '@spartacus/cart/base/root';
import { AuthService, CmsBannerComponent, RoutingService } from '@spartacus/core';
import { CmsComponentData, CmsComponentsService } from '@spartacus/storefront';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-olf-cart-details',
  templateUrl: './olf-cart-details.component.html',
  styleUrls: ['./olf-cart-details.component.scss']
})

export class OlfCartDetailsComponent extends CartDetailsComponent {

}
