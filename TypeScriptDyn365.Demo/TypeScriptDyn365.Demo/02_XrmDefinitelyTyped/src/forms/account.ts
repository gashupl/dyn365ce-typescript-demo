module Account {

    import IDyn365Navigation = Dyn365Common.INavigation;
    import Dyn365Navigation = Dyn365Common.Navigation;
    import IOpportunityDataService = Dyn365DataServices.IOpportunityDataService;
    import OpportunityDataService = Dyn365DataServices.OpportunityDataService;

    export class FormEventHandlers {

        private static dyn365FormCommon: IDyn365Navigation;
        private static opportunityDataService: IOpportunityDataService;
        constructor(dyn365FormCommon: IDyn365Navigation, oppDataService: IOpportunityDataService) {

            if (dyn365FormCommon) {
                FormEventHandlers.dyn365FormCommon = dyn365FormCommon;
            } else {
                FormEventHandlers.dyn365FormCommon = new Dyn365Navigation();
            }

            if (oppDataService) {
                FormEventHandlers.opportunityDataService = oppDataService;
            } else {
                FormEventHandlers.opportunityDataService = new OpportunityDataService();
            }
        }

        static onLoad(executionContext: Xrm.ExecutionContext<any>): void {
            console.log("onLoad invoked from Product");
            var form = new FormLogic(
                FormEventHandlers.dyn365FormCommon,
                FormEventHandlers.opportunityDataService,
                executionContext);

            form.setDefaultDateForNewRecords(new Date());
            form.tryShowMissingOpportunitiesWarining(); 
        }
    }

    export class Ribbon {

        private static dyn365Navigation: IDyn365Navigation;
        constructor(dyn365Navigation: IDyn365Navigation) {

            if (dyn365Navigation) {
                Ribbon.dyn365Navigation = dyn365Navigation;
            } else {
                Ribbon.dyn365Navigation = new Dyn365Navigation();
            }
        }

        static onOpenExternalFormButtonClick(): void {
            console.log("onOpenExternalFormButtonClick invoked from Account");
            Ribbon.dyn365Navigation.openUrl("www.wp.pl", null); 
        }
    }

    class FormLogic {

        dyn365Navigation: IDyn365Navigation;
        opportunitiesDataService: IOpportunityDataService
        executionContext: Xrm.ExecutionContext<any>;
        formContext: Form.account.Main.Account;

        constructor(dyn365Navigation: IDyn365Navigation, oppDataService: IOpportunityDataService, executionContext: Xrm.ExecutionContext<any>) {
            this.dyn365Navigation = dyn365Navigation;
            this.opportunitiesDataService = oppDataService; 
            this.executionContext = executionContext;
            this.formContext = <Form.account.Main.Account>executionContext.getFormContext();
        }

        setDefaultDateForNewRecords(now: Date) {

            if (this.formContext.ui.getFormType() === 1) {
                this.formContext.getControl("foo_firstcontactdate").getAttribute().setValue(now); 
            }
        }

        tryShowMissingOpportunitiesWarining() {
            console.log("tryShowMissingOpportunitiesWarining");
            let accountId = this.formContext.data.entity.getId();
            this.opportunitiesDataService.getAccountOpportunities(accountId, this.showMissingOpportunitiesWarning, null);
        }

        private showMissingOpportunitiesWarning(opportunities): void {
            var notificationLevel: Xrm.NotificationLevel = "WARNING"; 
            if (opportunities.length === 0) {
                this.formContext.ui.setFormNotification("Missing opportunities for this account", notificationLevel, "");
            }
        }
    }
}