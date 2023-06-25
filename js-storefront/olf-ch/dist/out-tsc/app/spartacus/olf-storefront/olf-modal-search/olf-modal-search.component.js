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
let OlfmodalSearchComponent = class OlfmodalSearchComponent extends SearchBoxComponent {
    constructor(searchBoxComponentService, modalService, routingService) {
        super(searchBoxComponentService, null);
        this.searchBoxComponentService = searchBoxComponentService;
        this.modalService = modalService;
        this.routingService = routingService;
        this.customConfig = DEFAULT_SEARCHBOX_CONFIG;
    }
    closeModal() {
        this.modalService.closeActiveModal();
    }
};
OlfmodalSearchComponent = __decorate([
    Component({
        selector: 'app-olf-modal-search',
        templateUrl: './olf-modal-search.component.html',
        styleUrls: ['./olf-modal-search.component.scss']
    })
], OlfmodalSearchComponent);
export { OlfmodalSearchComponent };
//# sourceMappingURL=olf-modal-search.component.js.map