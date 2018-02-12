declare namespace Form.opportunity.Quick {
  namespace QuickOpportunityViewForm {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
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
      get(name: "customerneed"): Xrm.Attribute<string>;
      get(name: "decisionmaker"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "developproposal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "estimatedclosedate"): Xrm.DateAttribute;
      get(name: "estimatedvalue"): Xrm.NumberAttribute;
      get(name: "filedebrief"): Xrm.OptionSetAttribute<boolean>;
      get(name: "finaldecisiondate"): Xrm.DateAttribute;
      get(name: "identifycompetitors"): Xrm.OptionSetAttribute<boolean>;
      get(name: "identifycustomercontacts"): Xrm.OptionSetAttribute<boolean>;
      get(name: "identifypursuitteam"): Xrm.OptionSetAttribute<boolean>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "parentaccountid"): Xrm.LookupAttribute;
      get(name: "parentcontactid"): Xrm.LookupAttribute;
      get(name: "presentfinalproposal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "presentproposal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "proposedsolution"): Xrm.Attribute<string>;
      get(name: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess>;
      get(name: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe>;
      get(name: "sendthankyounote"): Xrm.OptionSetAttribute<boolean>;
      get(name: "stepname"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "estimatedclosedate"): Xrm.DateControl;
      get(name: "estimatedvalue"): Xrm.NumberControl;
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
      get(name: "name"): Xrm.StringControl;
      get(name: "stepname"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickOpportunityViewForm extends Xrm.PageBase<QuickOpportunityViewForm.Attributes,QuickOpportunityViewForm.Tabs,QuickOpportunityViewForm.Controls> {
    getAttribute(attributeName: "budgetamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "completefinalproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "completeinternalreview"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "customerneed"): Xrm.Attribute<string>;
    getAttribute(attributeName: "decisionmaker"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "developproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "estimatedclosedate"): Xrm.DateAttribute;
    getAttribute(attributeName: "estimatedvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "filedebrief"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "finaldecisiondate"): Xrm.DateAttribute;
    getAttribute(attributeName: "identifycompetitors"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "identifycustomercontacts"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "identifypursuitteam"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "parentcontactid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "presentfinalproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "presentproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "proposedsolution"): Xrm.Attribute<string>;
    getAttribute(attributeName: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess>;
    getAttribute(attributeName: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe>;
    getAttribute(attributeName: "sendthankyounote"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "stepname"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "estimatedclosedate"): Xrm.DateControl;
    getControl(controlName: "estimatedvalue"): Xrm.NumberControl;
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
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "stepname"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
