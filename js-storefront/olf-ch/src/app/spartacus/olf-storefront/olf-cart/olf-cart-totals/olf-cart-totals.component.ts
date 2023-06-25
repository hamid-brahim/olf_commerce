import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartTotalsComponent } from '@spartacus/cart/base/components';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-olf-cart-totals',
  templateUrl: './olf-cart-totals.component.html',
  styleUrls: ['./olf-cart-totals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OlfCartTotalsComponent extends CartTotalsComponent {

  data : string;

  constructor(activeCartFacade: ActiveCartFacade, component: CmsComponentData<any>) {
    super(activeCartFacade);
    component.data$.subscribe(data => {
      this.data = data.otherProperties;
    });
  }
}
