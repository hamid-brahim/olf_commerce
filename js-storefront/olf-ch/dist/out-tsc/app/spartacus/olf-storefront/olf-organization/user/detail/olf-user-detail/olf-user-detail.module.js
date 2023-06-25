import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import { KeyboardFocusModule } from '@spartacus/storefront';
import { CardModule, DisableInfoModule } from "@spartacus/organization/administration/components";
import { OlfUserDetailComponent } from './olf-user-detail.component';
import { OlfToggleStatusModule } from "../../../shared/detail/toggle-status-action/olf-toggle-status/olf-toggle-status.module";
let OlfUserDetailModule = class OlfUserDetailModule {
};
OlfUserDetailModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            I18nModule,
            KeyboardFocusModule,
            UrlModule,
            CardModule,
            OlfToggleStatusModule,
            DisableInfoModule,
        ],
        declarations: [
            OlfUserDetailComponent,
        ],
        exports: [
            OlfUserDetailComponent
        ]
    })
], OlfUserDetailModule);
export { OlfUserDetailModule };
//# sourceMappingURL=olf-user-detail.module.js.map