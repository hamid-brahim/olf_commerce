import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SearchBoxComponent } from '@spartacus/storefront';
const DEFAULT_SEARCHBOX_CONFIG = {
    minCharactersBeforeRequest: 3,
    displayProducts: true,
    displaySuggestions: true,
    maxProducts: 10,
    maxSuggestions: 5,
    displayProductImages: true,
};
let OlfDialogSearchComponent = class OlfDialogSearchComponent extends SearchBoxComponent {
    constructor(searchBoxComponentService, launchDialogService, routingService) {
        super(searchBoxComponentService, null, null, null);
        this.searchBoxComponentService = searchBoxComponentService;
        this.launchDialogService = launchDialogService;
        this.routingService = routingService;
        this.customConfig = DEFAULT_SEARCHBOX_CONFIG;
    }
    closeDialog() {
        this.launchDialogService.closeDialog('close');
    }
    search(query) {
        this.searchBoxComponentService.search(query, this.customConfig);
        this.open();
    }
    navigateToProductPage(product) {
        this.routingService.go({
            cxRoute: 'product',
            params: product,
        });
        this.searchBoxComponentService.clearResults();
        this.closeDialog();
    }
};
OlfDialogSearchComponent = __decorate([
    Component({
        selector: 'app-olf-dialog-search',
        templateUrl: './olf-dialog-search.component.html',
        styleUrls: ['./olf-dialog-search.component.scss']
    })
], OlfDialogSearchComponent);
export { OlfDialogSearchComponent };
//# sourceMappingURL=olf-dialog-search.component.js.map