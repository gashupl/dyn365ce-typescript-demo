declare namespace Form.contact.Quick {
  namespace contactcard {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Cases"): Xrm.PageSection;
        get(name: "Entitlements"): Xrm.PageSection;
        get(name: "information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "fullname"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "parentcustomerid"): Xrm.LookupAttribute;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "contactcasessgrid"): Xrm.SubGridControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fullname"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "parentcustomerid"): Xrm.LookupControl;
      get(name: "subgrid_Entitlement"): Xrm.SubGridControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface contactcard extends Xrm.PageBase<contactcard.Attributes,contactcard.Tabs,contactcard.Controls> {
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "contactcasessgrid"): Xrm.SubGridControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fullname"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl;
    getControl(controlName: "subgrid_Entitlement"): Xrm.SubGridControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
