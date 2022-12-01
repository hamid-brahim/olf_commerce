/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package be.canguru.cangubike.initialdata.setup;

import be.canguru.cangubike.initialdata.constants.CangubikeInitialDataConstants;
import be.canguru.cangubike.initialdata.services.impl.CangubikeSampleDataImportService;
import de.hybris.platform.commerceservices.dataimport.impl.CoreDataImportService;
import de.hybris.platform.commerceservices.setup.AbstractSystemSetup;
import de.hybris.platform.commerceservices.setup.data.ImportData;
import de.hybris.platform.commerceservices.setup.events.CoreDataImportedEvent;
import de.hybris.platform.commerceservices.setup.events.SampleDataImportedEvent;
import de.hybris.platform.core.initialization.SystemSetup;
import de.hybris.platform.core.initialization.SystemSetup.Process;
import de.hybris.platform.core.initialization.SystemSetup.Type;
import de.hybris.platform.core.initialization.SystemSetupContext;
import de.hybris.platform.core.initialization.SystemSetupParameter;
import de.hybris.platform.core.initialization.SystemSetupParameterMethod;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;


/**
 * This class provides hooks into the system's initialization and update processes.
 */
@SystemSetup(extension = CangubikeInitialDataConstants.EXTENSIONNAME)
public class InitialDataSystemSetup extends AbstractSystemSetup
{private static final Logger LOG = Logger.getLogger(InitialDataSystemSetup.class);

	private static final String CANGUBIKE= "cangubike";
	private static final String OLF = "olf";
	private static final String IMPORT_CORE_DATA = "importCoreData";
	private static final String IMPORT_SAMPLE_DATA = "importSampleData";
	private static final String ACTIVATE_SOLR_CRON_JOBS = "activateSolrCronJobs";

	private CoreDataImportService coreDataImportService;
	private CangubikeSampleDataImportService sampleDataImportService;


	public InitialDataSystemSetup(CoreDataImportService coreDataImportService, CangubikeSampleDataImportService sampleDataImportService){
		this.coreDataImportService = coreDataImportService;
		this.sampleDataImportService = sampleDataImportService;
	}

	/**
	 * Generates the Dropdown and Multi-select boxes for the project data import
	 */
	@Override
	@SystemSetupParameterMethod
	public List<SystemSetupParameter> getInitializationOptions()
	{
		final List<SystemSetupParameter> params = new ArrayList<SystemSetupParameter>();

		params.add(createBooleanSystemSetupParameter(IMPORT_CORE_DATA, "Import Core Data", true));
		params.add(createBooleanSystemSetupParameter(IMPORT_SAMPLE_DATA, "Import Sample Data", true));
		params.add(createBooleanSystemSetupParameter(ACTIVATE_SOLR_CRON_JOBS, "Activate Solr Cron Jobs", true));
		// Add more Parameters here as you require

		return params;
	}

	/**
	 * Implement this method to create initial objects. This method will be called by system creator during
	 * initialization and system update. Be sure that this method can be called repeatedly.
	 *
	 * @param context
	 *           the context provides the selected parameters and values
	 */
	@SystemSetup(type = Type.ESSENTIAL, process = Process.ALL)
	public void createEssentialData(final SystemSetupContext context)
	{
		// Add Essential Data here as you require
	}

	/**
	 * Implement this method to create data that is used in your project. This method will be called during the system
	 * initialization. <br>
	 * Add import data for each site you have configured
	 *
	 * <pre>
	 * final List<ImportData> importData = new ArrayList<ImportData>();
	 *
	 * final ImportData sampleImportData = new ImportData();
	 * sampleImportData.setProductCatalogName(SAMPLE_PRODUCT_CATALOG_NAME);
	 * sampleImportData.setContentCatalogNames(Arrays.asList(SAMPLE_CONTENT_CATALOG_NAME));
	 * sampleImportData.setStoreNames(Arrays.asList(SAMPLE_STORE_NAME));
	 * importData.add(sampleImportData);
	 *
	 * getCoreDataImportService().execute(this, context, importData);
	 * getEventService().publishEvent(new CoreDataImportedEvent(context, importData));
	 *
	 * getSampleDataImportService().execute(this, context, importData);
	 * getEventService().publishEvent(new SampleDataImportedEvent(context, importData));
	 * </pre>
	 *
	 * @param context
	 *           the context provides the selected parameters and values
	 */
	@SystemSetup(type = Type.PROJECT, process = Process.ALL)
	public void createProjectData(final SystemSetupContext context)
	{
		LOG.info("###################### Start Importing Cangubike Data ################");
		final List<ImportData> importData = new ArrayList<ImportData>();

		final ImportData cangubikeImportData = new ImportData();
		cangubikeImportData.setProductCatalogName(CANGUBIKE);
		cangubikeImportData.setContentCatalogNames(List.of(CANGUBIKE));
		cangubikeImportData.setStoreNames(List.of(CANGUBIKE));
		importData.add(cangubikeImportData);
		
		final ImportData olfImportData = new ImportData();
		olfImportData.setProductCatalogName(OLF);
		olfImportData.setContentCatalogNames(List.of(OLF));
		olfImportData.setStoreNames(List.of(OLF));

		importData.add(olfImportData);

		getCoreDataImportService().execute(this, context, importData);
		getEventService().publishEvent(new CoreDataImportedEvent(context, importData));

		getSampleDataImportService().execute(this, context, importData);
		getSampleDataImportService().importCommerceOrgData(this, context);
		//getSampleDataImportService().importProductConfiggData(this, context);
		getEventService().publishEvent(new SampleDataImportedEvent(context, importData));
	}

	public CoreDataImportService getCoreDataImportService()
	{
		return coreDataImportService;
	}

	public CangubikeSampleDataImportService getSampleDataImportService(){return sampleDataImportService;}

}
