import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FooterNavigationComponent } from "@spartacus/storefront";
let OlfFooterComponent = class OlfFooterComponent extends FooterNavigationComponent {
    isSocialMediaNode(node) {
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
    ngOnInit() {
        this.node$.subscribe(data => {
            data.children.forEach(socialMedia => {
                if (socialMedia.title == 'social media' || socialMedia.title == 'reseaux sociaux' || socialMedia.title == 'soziales netzwerk') {
                    socialMedia.children?.forEach(child => {
                        if (child?.title.toLowerCase() == 'facebook') {
                            this.facebookUrl = child.url;
                        }
                        if (child?.title.toLowerCase() == 'linkedin') {
                            this.linkedinUrl = child.url;
                        }
                        if (child?.title.toLowerCase() == 'instagram') {
                            this.instagramUrl = child.url;
                        }
                        if (child?.title.toLowerCase() == 'tiktok') {
                            this.tiktokUrl = child.url;
                        }
                    });
                }
            });
        });
    }
};
OlfFooterComponent = __decorate([
    Component({
        selector: 'app-olf-footer',
        templateUrl: './olf-footer.component.html',
        styleUrls: ['./olf-footer.component.scss']
    })
], OlfFooterComponent);
export { OlfFooterComponent };
//# sourceMappingURL=olf-footer.component.js.map