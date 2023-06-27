import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActiveCartService } from '@spartacus/cart/base/core';
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";


@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent  {


  quantity$: Observable<number> = this.activeCartService.getActive().pipe(
    startWith({ deliveryItemsQuantity: 0 }),
    map((cart) => cart.deliveryItemsQuantity || 0)
  );

  constructor(protected activeCartService: ActiveCartService) { }
}
