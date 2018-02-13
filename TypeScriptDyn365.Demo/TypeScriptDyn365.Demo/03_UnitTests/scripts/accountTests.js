var NavigationMock = /** @class */ (function () {
    function NavigationMock() {
        this.urlOpened = false;
    }
    NavigationMock.prototype.openUrl = function (url, options) {
        this.urlOpened = true;
    };
    NavigationMock.prototype.alertDialog = function (message) { throw new Error("Not implemented"); };
    return NavigationMock;
}());
describe("External url should be opened", function () {
    it("and it is opened ", function () {
        var navigationMock = new NavigationMock();
        var accountRibbon = new AccountModule.Ribbon(navigationMock);
        AccountModule.Ribbon.onOpenExternalFormButtonClick();
        expect(navigationMock.urlOpened).toBe(true);
    });
});
//# sourceMappingURL=accountTests.js.map