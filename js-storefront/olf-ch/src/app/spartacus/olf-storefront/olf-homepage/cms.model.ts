import {CmsBannerComponent, CmsComponent} from "@spartacus/core";

export interface CmsHomepageMainTileComponent extends CmsComponent {
  title?:string;
  products?:string;
  container?: string;
}
