var ExecutionContextMock = /** @class */ (function () {
    function ExecutionContextMock() {
    }
    ExecutionContextMock.prototype.getContext = function () { throw new Error("Not implemented"); };
    ExecutionContextMock.prototype.getDepth = function () { throw new Error("Not implemented"); };
    ExecutionContextMock.prototype.getEventArgs = function () { throw new Error("Not implemented"); };
    ExecutionContextMock.prototype.getEventSource = function () { };
    ExecutionContextMock.prototype.setSharedVariable = function (key, value) { throw new Error("Not implemented"); };
    ExecutionContextMock.prototype.getSharedVariable = function (key) { };
    ExecutionContextMock.prototype.getUrl = function () { throw new Error("Not implemented"); };
    ExecutionContextMock.prototype.getFormContext = function () {
        return new FormContextMock();
    };
    return ExecutionContextMock;
}());
var FormContextMock = /** @class */ (function () {
    function FormContextMock() {
    }
    return FormContextMock;
}());
describe("Calulated age should be 20", function () {
    it("and Age is 20", function () {
        var expectedAge = 20;
        var executionContextMock = new ExecutionContextMock();
        var contactForm = new Contact.FormLogic(executionContextMock);
        var now = new Date(2018, 2, 15);
        var birthday = new Date(1998, 2, 11);
        var actualAge = contactForm.calculateAge(now, birthday);
        expect(actualAge).toBe(expectedAge);
    });
});
//# sourceMappingURL=contactTests.js.map