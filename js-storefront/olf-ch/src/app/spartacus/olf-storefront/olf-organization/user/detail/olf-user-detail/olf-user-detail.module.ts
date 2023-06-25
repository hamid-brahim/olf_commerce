import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import { KeyboardFocusModule } from '@spartacus/storefront';
import {CardModule, DisableInfoComponent, DisableInfoModule, ToggleStatusModule} from "@spartacus/organization/administration/components";
import { OlfUserDetailComponent } from './olf-user-detail.component';
import {
  OlfToggleStatusModule
} from "../../../shared/detail/toggle-status-action/olf-toggle-status/olf-toggle-status.module";

@NgModule({
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
export class OlfUserDetailModule { }
