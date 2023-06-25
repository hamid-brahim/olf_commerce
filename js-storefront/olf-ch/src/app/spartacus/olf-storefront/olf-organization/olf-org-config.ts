/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuthGuard, CmsConfig } from '@spartacus/core';
import { ItemService, ListComponent, ListService, UserChangePasswordFormComponent, UserFormComponent, UserItemService, UserListService } from '@spartacus/organization/administration/components';
import { AdminGuard } from '@spartacus/organization/administration/core';
import { ROUTE_PARAMS } from '@spartacus/organization/administration/root';
import { OlfUserDetailComponent } from './user/detail/olf-user-detail/olf-user-detail.component';

export const olfUserCmsConfig: CmsConfig = {
  cmsComponents: {
    ManageUsersListComponent: {
      component: ListComponent,
      providers: [
        {
          provide: ListService,
          useExisting: UserListService,
        },
        {
          provide: ItemService,
          useExisting: UserItemService,
        },
      ],
      childRoutes: {
        parent: {
          data: {
            cxPageMeta: {
              breadcrumb: 'orgUser.breadcrumbs.list',
              //resolver: UserRoutePageMetaResolver,
            },
          },
        },
        children: [
          {
            path: 'create',
            component: UserFormComponent,
          },
          {
            path: `:${ROUTE_PARAMS.userCode}`,
            component: OlfUserDetailComponent,
            data: {
              cxPageMeta: { breadcrumb: 'orgUser.breadcrumbs.details' },
            },
            children: [
              {
                path: `edit`,
                component: UserFormComponent,
              },
              {
                path: `change-password`,
                component: UserChangePasswordFormComponent,
              },
            ],
          },
        ],
      },
      guards: [AuthGuard, AdminGuard],
    },
  },
};

