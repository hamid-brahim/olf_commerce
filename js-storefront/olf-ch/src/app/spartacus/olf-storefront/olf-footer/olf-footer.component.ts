import {Component, OnInit} from '@angular/core';
import {FooterNavigationComponent, NavigationNode} from "@spartacus/storefront";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-olf-footer',
  templateUrl: './olf-footer.component.html',
  styleUrls: ['./olf-footer.component.scss']
})
export class OlfFooterComponent extends FooterNavigationComponent implements OnInit {
  facebookUrl;
  linkedinUrl;
  instagramUrl;
  tiktokUrl;
  url;

  isSocialMediaNode(node: NavigationNode): boolean {
    return (node.title == 'social media' || node.title == 'reseaux sociaux' || node.title == 'soziales netzwerk');
  }

  // getSocialLink(media: string): string {
  //   this.node$.subscribe(data => {
  //     data.children.forEach(socialMedia => {
  //       if (socialMedia.title == 'social media' || socialMedia.title == 'reseaux sociaux' || socialMedia.title == 'soziales netzwerk') {
  //         socialMedia.children.forEach(child => {
  //           if (child.title.toLowerCase() == media.toLowerCase()) {
  //             this.url = child.url;
  //           }
  //         })
  //         return this.url;
  //       }
  //     });
  //   });
  //   return this.url;
  // }
  ngOnInit(): void {
    this.node$.subscribe(data => {
      data.children.forEach(socialMedia => {
        if (socialMedia.title == 'social media' || socialMedia.title == 'reseaux sociaux' || socialMedia.title == 'soziales netzwerk') {
          socialMedia.children?.forEach(child => {
            if (child?.title.toLowerCase() == 'facebook') {
              this.facebookUrl = child.url;
            }
            if (child?.title.toLowerCase() == 'linkedin'){
              this.linkedinUrl = child.url;
            }
            if (child?.title.toLowerCase() == 'instagram') {
              this.instagramUrl = child.url;
            }
            if (child?.title.toLowerCase() == 'tiktok') {
              this.tiktokUrl = child.url;
            }
          })
        }
      });
    });
  }
}
