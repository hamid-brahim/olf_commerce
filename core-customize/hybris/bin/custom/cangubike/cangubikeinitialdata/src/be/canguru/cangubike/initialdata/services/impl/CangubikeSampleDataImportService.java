package be.canguru.cangubike.initialdata.services.impl;

import de.hybris.platform.commerceservices.dataimport.impl.SampleDataImportService;
import de.hybris.platform.commerceservices.setup.AbstractSystemSetup;
import de.hybris.platform.core.initialization.SystemSetupContext;

public class CangubikeSampleDataImportService extends SampleDataImportService{

    public static final String IMPORT_SAMPLE_DATA = "importSampleData";


    /**
     * Imports the data related to Commerce Org.
     *
     * @param context the context used.
     */
    public void importCommerceOrgData(final AbstractSystemSetup systemSetup, final SystemSetupContext context) {

        final boolean importSampleData = systemSetup.getBooleanSystemSetupParameter(context, IMPORT_SAMPLE_DATA);

        if (importSampleData) {

            final String extensionName = context.getExtensionName();

            getSetupImpexService().importImpexFile(String.format("/%s/import/sampledata/commerceorg/user-groups.impex", extensionName), false);
        }
    }
}
