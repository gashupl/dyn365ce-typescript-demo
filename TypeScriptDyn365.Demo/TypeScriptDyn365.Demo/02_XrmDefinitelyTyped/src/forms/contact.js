var ContactModule;
(function (ContactModule) {
    var FormEventHandlers = /** @class */ (function () {
        function FormEventHandlers() {
        }
        return FormEventHandlers;
    }());
    ContactModule.FormEventHandlers = FormEventHandlers;
    var FormLogic = /** @class */ (function () {
        function FormLogic(executionContext) {
            this.executionContext = executionContext;
            this.formContext = executionContext.getFormContext();
        }
        FormLogic.prototype.setAge = function (now, birthday) {
            if (now && birthday) {
                var age = this.calculateAge(now, birthday);
                this.formContext.getControl("foo_age").getAttribute().setValue(age);
            }
        };
        FormLogic.prototype.calculateAge = function (now, birthday) {
            var ageDifMs = now.getTime() - birthday.getTime();
            var ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        };
        return FormLogic;
    }());
    ContactModule.FormLogic = FormLogic;
})(ContactModule || (ContactModule = {}));
//# sourceMappingURL=contact.js.map