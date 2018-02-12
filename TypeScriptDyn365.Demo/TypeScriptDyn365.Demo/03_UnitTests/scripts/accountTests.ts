class NavigationMock implements Dyn365Common.INavigation {
    urlOpened: boolean = false; 
    openUrl(url: string, options: Xrm.SizeOptions): void {
        this.urlOpened = true; 
    }

}

describe("External url should be opened", () => {

    it("and it is opened ", () => {
        var navigationMock = new NavigationMock();
        var accountRibbon = new Account.Ribbon(navigationMock);

        Account.Ribbon.onOpenExternalFormButtonClick(); 
        expect(navigationMock.urlOpened).toBe(true);
    });
});


