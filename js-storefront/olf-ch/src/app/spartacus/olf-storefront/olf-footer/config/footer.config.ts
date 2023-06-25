import { CmsConfig} from "@spartacus/core";
import { OlfFooterComponent } from "../olf-footer.component";

export const footerCmsConfig = <CmsConfig> {
  cmsComponents: {
    FooterNavigationComponent: {
      component: OlfFooterComponent,
    },
  },
};

