import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FeaturesConfigModule, I18nModule } from '@spartacus/core';
import {OlfAddressFormComponent} from "./olf-address-form.component";
import {FormErrorsModule, NgSelectA11yModule} from "@spartacus/storefront";


@NgModule({
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
export class OlfAddressFormModule{}
