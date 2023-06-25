import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { MiniCartComponent, MiniCartComponentService } from '@spartacus/cart/base/components/mini-cart';
import { MultiCartSelectors, StateWithMultiCart } from '@spartacus/cart/base/core';
import { OrderEntry } from '@spartacus/cart/base/root';
import { RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-olf-filled-modal-cart',
  templateUrl: './olf-filled-modal-cart.component.html',
  styleUrls: ['./olf-filled-modal-cart.component.scss']
})
export class OlfFilledModalCartComponent extends MiniCartComponent {

  public isStable$: Observable<boolean> = this.store.select(
    MultiCartSelectors.getCartIsStableSelectorFactory('')
  );
  @Input() public products: OrderEntry[] = [];

  @Output() public closeSideBar = new EventEmitter<any>();

  constructor(
    protected miniCartService: MiniCartComponentService,
    protected store: Store<StateWithMultiCart>,
    private routingService: RoutingService
  ) { super(miniCartService); }

  public goToCheckout(): void {
    this.closeSideBar.emit();
    this.routingService.goByUrl('checkout');
  }

  public dismissCartModal(): void {
    this.closeSideBar.emit();
  }

}
