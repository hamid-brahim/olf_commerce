import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {ActiveCartService} from "@spartacus/cart/base/core";


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
