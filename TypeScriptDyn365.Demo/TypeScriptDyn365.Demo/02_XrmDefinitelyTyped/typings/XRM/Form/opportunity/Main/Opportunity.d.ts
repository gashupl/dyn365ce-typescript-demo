declare namespace Form.opportunity.Main {
  namespace Opportunity {
    namespace Tabs {
      interface Product_Line_Items extends Xrm.SectionCollectionBase {
        get(name: "DynamicProperties"): Xrm.PageSection;
        get(name: "opportunityproducts"): Xrm.PageSection;
        get(name: "suggestionsection"): Xrm.PageSection;
        get(name: "totals"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface QUOTES extends Xrm.SectionCollectionBase {
        get(name: "opportunityquotes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Summary extends Xrm.SectionCollectionBase {
        get(name: "Notes_pane"): Xrm.PageSection;
        get(name: "Opportunity_details"): Xrm.PageSection;
        get(name: "Social_pane"): Xrm.PageSection;
        get(name: "Summary_section_6"): Xrm.PageSection;
        get(name: "opportunity_information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "budgetamount"): Xrm.NumberAttribute;
      get(name: "completefinalproposal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "completeinternalreview"): Xrm.OptionSetAttribute<boolean>;
      get(name: "currentsituation"): Xrm.Attribute<string>;
      get(name: "customerneed"): Xrm.Attribute<string>;
      get(name: "decisionmaker"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "developproposal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "discountamount"): Xrm.NumberAttribute;
      get(name: "discountpercentage"): Xrm.NumberAttribute;
      get(name: "estimatedclosedate"): Xrm.DateAttribute;
      get(name: "estimatedvalue"): Xrm.NumberAttribute;
      get(name: "filedebrief"): Xrm.OptionSetAttribute<boolean>;
      get(name: "finaldecisiondate"): Xrm.DateAttribute;
      get(name: "freightamount"): Xrm.NumberAttribute;
      get(name: "identifycompetitors"): Xrm.OptionSetAttribute<boolean>;
      get(name: "identifycustomercontacts"): Xrm.OptionSetAttribute<boolean>;
      get(name: "identifypursuitteam"): Xrm.OptionSetAttribute<boolean>;
      get(name: "isrevenuesystemcalculated"): Xrm.OptionSetAttribute<boolean>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: "parentaccountid"): Xrm.LookupAttribute;
      get(name: "parentcontactid"): Xrm.LookupAttribute;
      get(name: "presentfinalproposal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "presentproposal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "pricelevelid"): Xrm.LookupAttribute;
      get(name: "proposedsolution"): Xrm.Attribute<string>;
      get(name: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess>;
      get(name: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe>;
      get(name: "sendthankyounote"): Xrm.OptionSetAttribute<boolean>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<opportunity_statuscode>;
      get(name: "totalamount"): Xrm.NumberAttribute;
      get(name: "totalamountlessfreight"): Xrm.NumberAttribute;
      get(name: "totallineitemamount"): Xrm.NumberAttribute;
      get(name: "totaltax"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ActionCards"): Xrm.BaseControl;
      get(name: "Competitors"): Xrm.SubGridControl;
      get(name: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
      get(name: "ProductSuggestions_LinkControl"): Xrm.BaseControl;
      get(name: "Pursuit_Team"): Xrm.SubGridControl;
      get(name: "Stakeholders"): Xrm.SubGridControl;
      get(name: "budgetamount"): Xrm.NumberControl;
      get(name: "currentsituation"): Xrm.StringControl;
      get(name: "customerneed"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "discountamount"): Xrm.NumberControl;
      get(name: "discountpercentage"): Xrm.NumberControl;
      get(name: "freightamount"): Xrm.NumberControl;
      get(name: "header_estimatedclosedate"): Xrm.DateControl;
      get(name: "header_estimatedvalue"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl;
      get(name: "header_process_budgetamount"): Xrm.NumberControl;
      get(name: "header_process_completefinalproposal"): Xrm.OptionSetControl<boolean>;
      get(name: "header_process_completeinternalreview"): Xrm.OptionSetControl<boolean>;
      get(name: "header_process_customerneed"): Xrm.StringControl;
      get(name: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean>;
      get(name: "header_process_description"): Xrm.StringControl;
      get(name: "header_process_developproposal"): Xrm.OptionSetControl<boolean>;
      get(name: "header_process_filedebrief"): Xrm.OptionSetControl<boolean>;
      get(name: "header_process_finaldecisiondate"): Xrm.DateControl;
      get(name: "header_process_identifycompetitors"): Xrm.OptionSetControl<boolean>;
      get(name: "header_process_identifycustomercontacts"): Xrm.OptionSetControl<boolean>;
      get(name: "header_process_identifypursuitteam"): Xrm.OptionSetControl<boolean>;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl;
      get(name: "header_process_parentcontactid"): Xrm.LookupControl;
      get(name: "header_process_presentfinalproposal"): Xrm.OptionSetControl<boolean>;
      get(name: "header_process_presentproposal"): Xrm.OptionSetControl<boolean>;
      get(name: "header_process_proposedsolution"): Xrm.StringControl;
      get(name: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess>;
      get(name: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe>;
      get(name: "header_process_sendthankyounote"): Xrm.OptionSetControl<boolean>;
      get(name: "header_statuscode"): Xrm.OptionSetControl<opportunity_statuscode>;
      get(name: "isrevenuesystemcalculated"): Xrm.OptionSetControl<boolean>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opportunityproductsGrid"): Xrm.SubGridControl;
      get(name: "parentaccountid"): Xrm.LookupControl;
      get(name: "parentcontactid"): Xrm.LookupControl;
      get(name: "pricelevelid"): Xrm.LookupControl;
      get(name: "proposedsolution"): Xrm.StringControl;
      get(name: "purchaseprocess"): Xrm.OptionSetControl<purchaseprocess>;
      get(name: "purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe>;
      get(name: "quote"): Xrm.SubGridControl;
      get(name: "totalamount"): Xrm.NumberControl;
      get(name: "totalamountlessfreight"): Xrm.NumberControl;
      get(name: "totallineitemamount"): Xrm.NumberControl;
      get(name: "totaltax"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Product_Line_Items"): Xrm.PageTab<Tabs.Product_Line_Items>;
      get(name: "QUOTES"): Xrm.PageTab<Tabs.QUOTES>;
      get(name: "Summary"): Xrm.PageTab<Tabs.Summary>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Opportunity extends Xrm.PageBase<Opportunity.Attributes,Opportunity.Tabs,Opportunity.Controls> {
    getAttribute(attributeName: "budgetamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "completefinalproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "completeinternalreview"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "currentsituation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customerneed"): Xrm.Attribute<string>;
    getAttribute(attributeName: "decisionmaker"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "developproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "discountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "discountpercentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "estimatedclosedate"): Xrm.DateAttribute;
    getAttribute(attributeName: "estimatedvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "filedebrief"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "finaldecisiondate"): Xrm.DateAttribute;
    getAttribute(attributeName: "freightamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "identifycompetitors"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "identifycustomercontacts"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "identifypursuitteam"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "isrevenuesystemcalculated"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "parentcontactid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "presentfinalproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "presentproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "proposedsolution"): Xrm.Attribute<string>;
    getAttribute(attributeName: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess>;
    getAttribute(attributeName: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe>;
    getAttribute(attributeName: "sendthankyounote"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<opportunity_statuscode>;
    getAttribute(attributeName: "totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totalamountlessfreight"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totallineitemamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totaltax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ActionCards"): Xrm.BaseControl;
    getControl(controlName: "Competitors"): Xrm.SubGridControl;
    getControl(controlName: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "ProductSuggestions_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "Pursuit_Team"): Xrm.SubGridControl;
    getControl(controlName: "Stakeholders"): Xrm.SubGridControl;
    getControl(controlName: "budgetamount"): Xrm.NumberControl;
    getControl(controlName: "currentsituation"): Xrm.StringControl;
    getControl(controlName: "customerneed"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "discountamount"): Xrm.NumberControl;
    getControl(controlName: "discountpercentage"): Xrm.NumberControl;
    getControl(controlName: "freightamount"): Xrm.NumberControl;
    getControl(controlName: "header_estimatedclosedate"): Xrm.DateControl;
    getControl(controlName: "header_estimatedvalue"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl;
    getControl(controlName: "header_process_budgetamount"): Xrm.NumberControl;
    getControl(controlName: "header_process_completefinalproposal"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_process_completeinternalreview"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_process_customerneed"): Xrm.StringControl;
    getControl(controlName: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_process_description"): Xrm.StringControl;
    getControl(controlName: "header_process_developproposal"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_process_filedebrief"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_process_finaldecisiondate"): Xrm.DateControl;
    getControl(controlName: "header_process_identifycompetitors"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_process_identifycustomercontacts"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_process_identifypursuitteam"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl;
    getControl(controlName: "header_process_parentcontactid"): Xrm.LookupControl;
    getControl(controlName: "header_process_presentfinalproposal"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_process_presentproposal"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_process_proposedsolution"): Xrm.StringControl;
    getControl(controlName: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess>;
    getControl(controlName: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe>;
    getControl(controlName: "header_process_sendthankyounote"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<opportunity_statuscode>;
    getControl(controlName: "isrevenuesystemcalculated"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opportunityproductsGrid"): Xrm.SubGridControl;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl;
    getControl(controlName: "parentcontactid"): Xrm.LookupControl;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl;
    getControl(controlName: "proposedsolution"): Xrm.StringControl;
    getControl(controlName: "purchaseprocess"): Xrm.OptionSetControl<purchaseprocess>;
    getControl(controlName: "purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe>;
    getControl(controlName: "quote"): Xrm.SubGridControl;
    getControl(controlName: "totalamount"): Xrm.NumberControl;
    getControl(controlName: "totalamountlessfreight"): Xrm.NumberControl;
    getControl(controlName: "totallineitemamount"): Xrm.NumberControl;
    getControl(controlName: "totaltax"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl;
    getControl(controlName: string): undefined;
  }
}