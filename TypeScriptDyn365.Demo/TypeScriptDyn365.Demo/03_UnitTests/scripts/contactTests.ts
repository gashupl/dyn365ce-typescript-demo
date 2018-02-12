class ExecutionContextMock implements Xrm.ExecutionContext<any>  {
    getContext(): Xrm.context { throw new Error("Not implemented"); }

    getDepth(): number { throw new Error("Not implemented"); }

    getEventArgs(): Xrm.SaveEventArgs { throw new Error("Not implemented"); }

    getEventSource() { }

    setSharedVariable(key: string, value): void { throw new Error("Not implemented"); }

    getSharedVariable(key: string) { }

    getUrl(): string { throw new Error("Not implemented"); }

    getFormContext(): Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase> {
        return new FormContextMock();
    }
}

class FormContextMock implements Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase> {
    data: Xrm.DataModule<Xrm.AttributeCollectionBase>;
    ui: Xrm.UiModule<Xrm.TabCollectionBase, Xrm.ControlCollectionBase>;
}

describe("Calulated age should be 20", () => {

    it("and Age is 20", () => {
        var expectedAge = 20;
        var executionContextMock = new ExecutionContextMock();
        var contactForm = new Contact.FormLogic(executionContextMock);

        var now = new Date(2018, 2, 15);
        var birthday = new Date(1998, 2, 11);
        var actualAge = contactForm.calculateAge(now, birthday);
        expect(actualAge).toBe(expectedAge);
    });
});



