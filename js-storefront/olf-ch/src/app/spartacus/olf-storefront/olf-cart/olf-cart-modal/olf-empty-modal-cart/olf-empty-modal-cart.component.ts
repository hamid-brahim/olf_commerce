import { Component, EventEmitter, Output } from '@angular/core';
import { RoutingService } from '@spartacus/core';

@Component({
  selector: 'app-olf-empty-modal-cart',
  templateUrl: './olf-empty-modal-cart.component.html',
  styleUrls: ['./olf-empty-modal-cart.component.scss']
})
export class OlfEmptyModalCartComponent {
  @Output() public closeSideBar = new EventEmitter<any>();

  constructor(private routingService: RoutingService) { }

  public goToHomePage(): void {
    this.closeSideBar.emit();
    this.routingService.goByUrl('');
  }

}


