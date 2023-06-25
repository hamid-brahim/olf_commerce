import { LayoutConfig } from "@spartacus/storefront";

export const olfLayoutConfig: LayoutConfig = {
  layoutSlots: {
    TopHeaderSection: {
      lg: {
        slots: ['SiteLinks', 'SiteContext'],
      },
      slots: ['SiteLinks', 'SiteContext'],
    },
    header: {
      lg: {
        slots: [
          'SiteLogo',
          'NavigationBar',
          'SiteLogin',
          'MiniCart',
          'SearchBox',
        ],
      },
      slots: [],

    },
    LandingPage2Template: {
      pageFold: 'Section2B',
      slots: [
        'Section1',
        'Section2A',
        'Section2B',
        'Section3',
        'Section4',
        'Section5',
      ],
    },
    BottomNavSection: {
      lg: {
        slots: [],
      },
      slots: ['BottomNav']
    }
  }
}
