declare namespace Form.contact.Quick {
  namespace AppforOutlookContactQuickView {
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
      get(name: "parentcustomerid"): Xrm.Attribute<any>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "AppforOutlook_Contact_QV_Subgrid_1"): Xrm.SubGridControl;
      get(name: "AppforOutlook_Contact_QV_Subgrid_2"): Xrm.SubGridControl;
      get(name: "AppforOutlook_Contact_QV_Subgrid_3"): Xrm.SubGridControl;
      get(name: "AppforOutlook_Contact_QV_Subgrid_4"): Xrm.SubGridControl;
      get(name: "parentcustomerid"): Xrm.Control<Xrm.Attribute<any>>;
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
  interface AppforOutlookContactQuickView extends Xrm.PageBase<AppforOutlookContactQuickView.Attributes,AppforOutlookContactQuickView.Tabs,AppforOutlookContactQuickView.Controls> {
    getAttribute(attributeName: "parentcustomerid"): Xrm.Attribute<any>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "AppforOutlook_Contact_QV_Subgrid_1"): Xrm.SubGridControl;
    getControl(controlName: "AppforOutlook_Contact_QV_Subgrid_2"): Xrm.SubGridControl;
    getControl(controlName: "AppforOutlook_Contact_QV_Subgrid_3"): Xrm.SubGridControl;
    getControl(controlName: "AppforOutlook_Contact_QV_Subgrid_4"): Xrm.SubGridControl;
    getControl(controlName: "parentcustomerid"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: string): undefined;
  }
}
