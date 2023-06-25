import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { olfUserCmsConfig } from './olf-org-config';
import { OlfToggleStatusModule } from './shared/detail/toggle-status-action/olf-toggle-status/olf-toggle-status.module';
import { OlfUserDetailModule } from './user/detail/olf-user-detail/olf-user-detail.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig(olfUserCmsConfig),
    OlfToggleStatusModule,
    OlfUserDetailModule
  ],

})
export class OlfOrganizationModule { }
