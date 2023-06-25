import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FeaturesConfigModule, I18nModule } from '@spartacus/core';
import { OlfAddressFormComponent } from "./olf-address-form.component";
import { FormErrorsModule, NgSelectA11yModule } from "@spartacus/storefront";
let OlfAddressFormModule = class OlfAddressFormModule {
};
OlfAddressFormModule = __decorate([
    NgModule({
        declarations: [OlfAddressFormComponent],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            NgSelectModule,
            FeaturesConfigModule,
            I18nModule,
            NgSelectA11yModule,
            FormErrorsModule
        ],
        exports: [
            OlfAddressFormComponent
        ]
    })
], OlfAddressFormModule);
export { OlfAddressFormModule };
//# sourceMappingURL=olf-address-form.module.js.map