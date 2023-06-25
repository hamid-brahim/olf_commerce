import { Component, Inject, OnInit } from '@angular/core';
import { CmsBannerComponent, CmsParagraphComponent, CmsService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import {OlfHomepageMainTileComponent} from "../olf-homepage-main-tile/olf-homepage-main-tile.component";

@Component({
  selector: 'app-olf-homepage-side-tile',
  templateUrl: './olf-homepage-side-tile.component.html',
  styleUrls: ['./olf-homepage-side-tile.component.scss']
})
export class OlfHomepageSideTileComponent extends OlfHomepageMainTileComponent{


}
