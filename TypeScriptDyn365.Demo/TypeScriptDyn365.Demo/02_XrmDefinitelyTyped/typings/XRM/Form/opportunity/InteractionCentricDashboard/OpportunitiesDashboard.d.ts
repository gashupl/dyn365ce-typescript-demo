declare namespace Form.opportunity.InteractionCentricDashboard {
  namespace OpportunitiesDashboard {
    namespace Tabs {
      interface StreamsContainer extends Xrm.SectionCollectionBase {
        get(name: "Streams"): Xrm.PageSection;
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
      get(name: "filedebrief"): Xrm.OptionSetAttribute<boolean>;
      get(name: "finaldecisiondate"): Xrm.DateAttribute;
      get(name: "identifycompetitors"): Xrm.OptionSetAttribute<boolean>;
      get(name: "identifycustomercontacts"): Xrm.OptionSetAttribute<boolean>;
      get(name: "identifypursuitteam"): Xrm.OptionSetAttribute<boolean>;
      get(name: "parentaccountid"): Xrm.LookupAttribute;
      get(name: "parentcontactid"): Xrm.LookupAttribute;
      get(name: "presentfinalproposal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "presentproposal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "proposedsolution"): Xrm.Attribute<string>;
      get(name: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess>;
      get(name: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe>;
      get(name: "sendthankyounote"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Component3ad71a5"): Xrm.SubGridControl;
      get(name: "Component93e3d5a"): Xrm.SubGridControl;
      get(name: "Componentd19026a"): Xrm.SubGridControl;
      get(name: "Componentd60f252"): Xrm.SubGridControl;
      get(name: "Component{dd412793-26e8-4b78-489a-0b2a75a75c2c}"): Xrm.BaseControl;
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
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "StreamsContainer"): Xrm.PageTab<Tabs.StreamsContainer>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface OpportunitiesDashboard extends Xrm.PageBase<OpportunitiesDashboard.Attributes,OpportunitiesDashboard.Tabs,OpportunitiesDashboard.Controls> {
    getAttribute(attributeName: "budgetamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "completefinalproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "completeinternalreview"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "customerneed"): Xrm.Attribute<string>;
    getAttribute(attributeName: "decisionmaker"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "developproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "filedebrief"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "finaldecisiondate"): Xrm.DateAttribute;
    getAttribute(attributeName: "identifycompetitors"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "identifycustomercontacts"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "identifypursuitteam"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "parentcontactid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "presentfinalproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "presentproposal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "proposedsolution"): Xrm.Attribute<string>;
    getAttribute(attributeName: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess>;
    getAttribute(attributeName: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe>;
    getAttribute(attributeName: "sendthankyounote"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "Component3ad71a5"): Xrm.SubGridControl;
    getControl(controlName: "Component93e3d5a"): Xrm.SubGridControl;
    getControl(controlName: "Componentd19026a"): Xrm.SubGridControl;
    getControl(controlName: "Componentd60f252"): Xrm.SubGridControl;
    getControl(controlName: "Component{dd412793-26e8-4b78-489a-0b2a75a75c2c}"): Xrm.BaseControl;
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
    getControl(controlName: string): undefined;
  }
}
