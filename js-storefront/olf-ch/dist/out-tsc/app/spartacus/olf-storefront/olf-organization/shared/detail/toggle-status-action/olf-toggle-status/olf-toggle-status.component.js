import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ConfirmationMessageComponent } from "@spartacus/organization/administration/components";
import { LoadStatus } from "@spartacus/organization/administration/core";
import { Subscription } from 'rxjs';
import { filter, first, take } from "rxjs/operators";
let OlfToggleStatusComponent = class OlfToggleStatusComponent {
    constructor(itemService, messageService, disableInfoService) {
        this.itemService = itemService;
        this.messageService = messageService;
        this.disableInfoService = disableInfoService;
        /**
         * The key input can be used to add a custom key.
         *
         * Most _organization_ entities use the `code` key, but there is some variations.
         */
        this.key = 'code';
        /**
         * resolves the current item.
         */
        this.current$ = this.itemService.current$;
        /**
         * resolves if the user is currently in the edit form.
         */
        this.isInEditMode$ = this.itemService.isInEditMode$;
        this.subscription = new Subscription();
    }
    toggle(item) {
        // if (!item.active) {
        // we do ask for confirmation when the entity gets activated
        this.update(item);
        // }
        // else {
        console.log('Inside else statment');
        console.log(ConfirmationMessageComponent);
        this.confirmation = this.messageService.add({
            message: {
                key: this.i18nRoot + '.messages.deactivate',
                params: { item },
            },
            messageTitle: {
                key: this.i18nRoot + '.messages.deactivateTitle',
                params: { item },
            },
            confirm: {
                key: 'organization.confirmation.disable',
            },
            component: ConfirmationMessageComponent,
        });
        this.subscription.add(this.confirmation.pipe(first()).subscribe((event) => {
            if (event.close) {
                this.confirmation = null;
            }
            if (event.confirm) {
                this.messageService.close(this.confirmation);
                this.update(item);
                this.confirmation = null;
            }
        }));
        // }
    }
    /**
     * Indicates whether the status can be toggled or not.
     */
    isDisabled(item) {
        return (this.disabled ??
            (this.disableInfoService.isParentDisabled(item) ||
                this.disableInfoService.isRootUnit(item)));
    }
    update(item) {
        console.log('Inside the update method');
        this.itemService
            .update(item[this.key], this.getPatchedItem(item))
            .pipe(take(1), filter((data) => data.status === LoadStatus.SUCCESS))
            .subscribe((data) => this.notify({ ...item, ...data.item }));
    }
    getPatchedItem(item) {
        const patch = {};
        Object.assign(patch, { [this.key]: item[this.key] });
        patch.active = !item.active;
        return patch;
    }
    notify(item) {
        this.messageService.add({
            message: {
                key: `${this.i18nRoot}.messages.${item.active ? 'confirmEnabled' : 'confirmDisabled'}`,
                params: { item },
            },
        });
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
};
__decorate([
    Input()
], OlfToggleStatusComponent.prototype, "i18nRoot", void 0);
__decorate([
    Input()
], OlfToggleStatusComponent.prototype, "key", void 0);
__decorate([
    Input()
], OlfToggleStatusComponent.prototype, "disabled", void 0);
OlfToggleStatusComponent = __decorate([
    Component({
        selector: 'olf-org-toggle-status',
        templateUrl: './olf-toggle-status.component.html',
        styleUrls: ['./olf-toggle-status.component.scss']
    })
], OlfToggleStatusComponent);
export { OlfToggleStatusComponent };
//# sourceMappingURL=olf-toggle-status.component.js.map