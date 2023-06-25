import { OlfCategoriesWrapperComponent } from "../olf-categories-wrapper.component";
export const categoriesWrapperLayoutConfig = {
    layoutSlots: {
        ProductListPageTemplate: {
            md: {
                slots: ['OlfCategoriesWrapper', 'ProductListSlot']
            },
        },
    },
};
export const categoriesWrapperCmsConfig = {
    cmsComponents: {
        OlfCategoriesWrapperComponent: {
            component: OlfCategoriesWrapperComponent,
        },
    },
};
export const staticComponents = {
    OlfCategoriesWrapperComponent: {
        typeCode: 'OlfCategoriesWrapperComponent',
        flexType: 'OlfCategoriesWrapperComponent',
        uid: 'OlfCategoriesWrapperComponent',
    },
};
const cmsPageSlotConfig = {
    OlfCategoriesWrapper: {
        componentIds: ['OlfCategoriesWrapperComponent'],
    },
};
export function categoriesWrapperCmsStructureConfig() {
    return {
        cmsStructure: {
            components: {
                ...staticComponents,
            },
            slots: {
                ...cmsPageSlotConfig,
            },
        },
    };
}
//# sourceMappingURL=categories-wrapper-config.js.map