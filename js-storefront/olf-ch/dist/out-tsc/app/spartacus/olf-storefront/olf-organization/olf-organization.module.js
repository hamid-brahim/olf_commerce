import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { olfUserCmsConfig } from './olf-org-config';
import { OlfToggleStatusModule } from './shared/detail/toggle-status-action/olf-toggle-status/olf-toggle-status.module';
import { OlfUserDetailModule } from './user/detail/olf-user-detail/olf-user-detail.module';
let OlfOrganizationModule = class OlfOrganizationModule {
};
OlfOrganizationModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            ConfigModule.withConfig(olfUserCmsConfig),
            OlfToggleStatusModule,
            OlfUserDetailModule
        ],
    })
], OlfOrganizationModule);
export { OlfOrganizationModule };
//# sourceMappingURL=olf-organization.module.js.map