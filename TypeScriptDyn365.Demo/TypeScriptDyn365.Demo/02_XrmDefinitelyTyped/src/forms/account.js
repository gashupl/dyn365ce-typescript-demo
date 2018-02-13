var AccountModule;
(function (AccountModule) {
    var Dyn365Navigation = Dyn365Common.Navigation;
    var OpportunityDataService = Dyn365DataServices.OpportunityDataService;
    var FormEventHandlers = /** @class */ (function () {
        function FormEventHandlers(dyn365FormCommon, oppDataService) {
            FormEventHandlers.initialize(dyn365FormCommon, oppDataService);
        }
        FormEventHandlers.initialize = function (dyn365FormCommon, oppDataService) {
            if (FormEventHandlers.isInitialized === false) {
                return;
            }
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
            FormEventHandlers.isInitialized = true;
        };
        FormEventHandlers.onLoad = function (executionContext) {
            console.log("onLoad invoked from Product");
            FormEventHandlers.initialize(null, null);
            var form = new FormLogic(FormEventHandlers.dyn365FormCommon, FormEventHandlers.opportunityDataService, executionContext);
            form.setDefaultDateForNewRecords(new Date());
            form.tryShowMissingOpportunitiesWarining();
        };
        FormEventHandlers.isInitialized = false;
        return FormEventHandlers;
    }());
    AccountModule.FormEventHandlers = FormEventHandlers;
    var Ribbon = /** @class */ (function () {
        function Ribbon(dyn365Navigation) {
            Ribbon.initialize(dyn365Navigation);
        }
        Ribbon.initialize = function (dyn365Navigation) {
            if (Ribbon.isInitialized === true) {
                return;
            }
            if (dyn365Navigation) {
                Ribbon.dyn365Navigation = dyn365Navigation;
            }
            else {
                Ribbon.dyn365Navigation = new Dyn365Navigation();
            }
            Ribbon.isInitialized = true;
        };
        Ribbon.onOpenExternalFormButtonClick = function () {
            console.log("onOpenExternalFormButtonClick invoked from Account");
            Ribbon.initialize(null);
            Ribbon.dyn365Navigation.openUrl("www.wp.pl", null);
        };
        Ribbon.isInitialized = false;
        return Ribbon;
    }());
    AccountModule.Ribbon = Ribbon;
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
            if (this.formContext.ui.getFormType() !== 1) {
                var accountId = this.formContext.data.entity.getId();
                this.opportunitiesDataService.getAccountOpportunities(accountId, this.showMissingOpportunitiesWarning, null);
            }
        };
        FormLogic.prototype.showMissingOpportunitiesWarning = function (opportunities) {
            var notificationLevel = "WARNING";
            if (opportunities.length === 0) {
                alert("Missing opportunities for this account");
            }
        };
        return FormLogic;
    }());
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=account.js.map