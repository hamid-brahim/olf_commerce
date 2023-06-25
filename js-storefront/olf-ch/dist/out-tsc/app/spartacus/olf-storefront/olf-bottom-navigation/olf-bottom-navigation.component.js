import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OlfBottomNavigationComponent = class OlfBottomNavigationComponent {
    constructor(authService, routingService, launchDialogService) {
        this.authService = authService;
        this.routingService = routingService;
        this.launchDialogService = launchDialogService;
    }
    ngOnDestroy() {
        this.clearElementRef;
    }
    navigateTo(path, event) {
        this.preventOtherActions(event);
        this.routingService.goByUrl(path);
    }
    setSearchActions(event) {
        this.preventOtherActions(event);
        this.createSearchModal();
    }
    createSearchModal() {
    }
    createModal(component, componentType) {
        this.clearElementRef();
    }
    createDialogInstance(component, componentType) {
        let dialogInstance;
        this.elementRef = this.launchDialogService.launch(STOCK_NOTIFICATION);
    }
    preventOtherActions(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    clearElementRef() {
        if (this.elementRef) {
            this.dismissModal('dismiss');
            this.elementRef = null;
        }
    }
    dismissModal(reason) {
        this.launchDialogService.closeDialog(reason);
    }
};
OlfBottomNavigationComponent = __decorate([
    Component({
        selector: 'app-olf-bottom-navigation',
        templateUrl: './olf-bottom-navigation.component.html',
        styleUrls: ['./olf-bottom-navigation.component.scss']
    })
], OlfBottomNavigationComponent);
export { OlfBottomNavigationComponent };
//# sourceMappingURL=olf-bottom-navigation.component.js.map