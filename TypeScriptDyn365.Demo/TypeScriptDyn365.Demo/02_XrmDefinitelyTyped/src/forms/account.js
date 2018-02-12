var Account;
(function (Account) {
    var Dyn365Navigation = Dyn365Common.Navigation;
    var OpportunityDataService = Dyn365DataServices.OpportunityDataService;
    var FormEventHandlers = /** @class */ (function () {
        function FormEventHandlers(dyn365FormCommon, oppDataService) {
            if (dyn365FormCommon) {
                FormEventHandlers.dyn365FormCommon = dyn365FormCommon;
            }
            else {
                FormEventHandlers.dyn365FormCommon = new Dyn365Navigation();
            }
            if (oppDataService) {
                FormEventHandlers.opportunityDataService = oppDataService;
            }
            else {
                FormEventHandlers.opportunityDataService = new OpportunityDataService();
            }
        }
        FormEventHandlers.onLoad = function (executionContext) {
            console.log("onLoad invoked from Product");
            var form = new FormLogic(FormEventHandlers.dyn365FormCommon, FormEventHandlers.opportunityDataService, executionContext);
            form.setDefaultDateForNewRecords(new Date());
            form.tryShowMissingOpportunitiesWarining();
        };
        return FormEventHandlers;
    }());
    Account.FormEventHandlers = FormEventHandlers;
    var Ribbon = /** @class */ (function () {
        function Ribbon(dyn365Navigation) {
            if (dyn365Navigation) {
                Ribbon.dyn365Navigation = dyn365Navigation;
            }
            else {
                Ribbon.dyn365Navigation = new Dyn365Navigation();
            }
        }
        Ribbon.onOpenExternalFormButtonClick = function () {
            console.log("onOpenExternalFormButtonClick invoked from Account");
            Ribbon.dyn365Navigation.openUrl("www.wp.pl", null);
        };
        return Ribbon;
    }());
    Account.Ribbon = Ribbon;
    var FormLogic = /** @class */ (function () {
        function FormLogic(dyn365Navigation, oppDataService, executionContext) {
            this.dyn365Navigation = dyn365Navigation;
            this.opportunitiesDataService = oppDataService;
            this.executionContext = executionContext;
            this.formContext = executionContext.getFormContext();
        }
        FormLogic.prototype.setDefaultDateForNewRecords = function (now) {
            if (this.formContext.ui.getFormType() === 1) {
                this.formContext.getControl("foo_firstcontactdate").getAttribute().setValue(now);
            }
        };
        FormLogic.prototype.tryShowMissingOpportunitiesWarining = function () {
            console.log("tryShowMissingOpportunitiesWarining");
            var accountId = this.formContext.data.entity.getId();
            this.opportunitiesDataService.getAccountOpportunities(accountId, this.showMissingOpportunitiesWarning, null);
        };
        FormLogic.prototype.showMissingOpportunitiesWarning = function (opportunities) {
            var notificationLevel = "WARNING";
            if (opportunities.length === 0) {
                this.formContext.ui.setFormNotification("Missing opportunities for this account", notificationLevel, "");
            }
        };
        return FormLogic;
    }());
})(Account || (Account = {}));
//# sourceMappingURL=account.js.map