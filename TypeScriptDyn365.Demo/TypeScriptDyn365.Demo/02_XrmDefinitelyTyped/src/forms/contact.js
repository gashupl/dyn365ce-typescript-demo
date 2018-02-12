var Contact;
(function (Contact) {
    var FormEventHandlers = /** @class */ (function () {
        function FormEventHandlers() {
        }
        return FormEventHandlers;
    }());
    Contact.FormEventHandlers = FormEventHandlers;
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
    Contact.FormLogic = FormLogic;
})(Contact || (Contact = {}));
//# sourceMappingURL=contact.js.map