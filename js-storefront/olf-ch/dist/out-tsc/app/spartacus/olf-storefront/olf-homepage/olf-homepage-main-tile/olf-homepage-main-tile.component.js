import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { filter, map } from "rxjs/operators";
let OlfHomepageMainTileComponent = class OlfHomepageMainTileComponent {
    constructor(componentData, productService) {
        this.componentData = componentData;
        this.productService = productService;
        this.componentData$ = this.componentData.data$.pipe(filter((data) => Boolean(data)));
        this.title$ = this.componentData$.pipe(map((data) => data.title));
        this.product$ = this.componentData$.pipe(map((data) => data.products ?? ''), map((products) => this.productService.get(products.trim())));
    }
    ngOnInit() {
    }
};
OlfHomepageMainTileComponent = __decorate([
    Component({
        selector: 'app-olf-homepage-main-tile',
        templateUrl: './olf-homepage-main-tile.component.html',
        styleUrls: ['./olf-homepage-main-tile.component.scss']
    })
], OlfHomepageMainTileComponent);
export { OlfHomepageMainTileComponent };
//# sourceMappingURL=olf-homepage-main-tile.component.js.map