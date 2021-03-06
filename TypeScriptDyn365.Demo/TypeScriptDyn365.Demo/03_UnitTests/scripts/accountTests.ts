﻿class NavigationMock implements Dyn365Common.INavigation {

    urlOpened: boolean = false; 
    openUrl(url: string, options: Xrm.SizeOptions): void {
        this.urlOpened = true; 
    }
    alertDialog(message: string): void { throw new Error("Not implemented"); }

}

describe("External url should be opened", () => {

    it("and it is opened ", () => {
        var navigationMock = new NavigationMock();
        var accountRibbon = new AccountModule.Ribbon(navigationMock);

        AccountModule.Ribbon.onOpenExternalFormButtonClick(); 
        expect(navigationMock.urlOpened).toBe(true);
    });
});


