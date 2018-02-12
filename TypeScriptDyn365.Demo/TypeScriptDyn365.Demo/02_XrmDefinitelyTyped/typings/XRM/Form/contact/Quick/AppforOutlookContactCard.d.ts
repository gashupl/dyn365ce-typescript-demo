declare namespace Form.contact.Quick {
  namespace AppforOutlookContactCard {
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
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
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
  interface AppforOutlookContactCard extends Xrm.PageBase<AppforOutlookContactCard.Attributes,AppforOutlookContactCard.Tabs,AppforOutlookContactCard.Controls> {
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
