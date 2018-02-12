module Dyn365DataServices {

    class DataServiceBase {
        removeBrackets(id: string): string {
            return id.replace("{", "", ).replace("}", "");
        }
    }

    export interface IOpportunityDataService {
        getAccountOpportunities(accountId, onSuccess, onError): void
    }

    export class OpportunityDataService extends DataServiceBase implements IOpportunityDataService {

        getAccountOpportunities(accountId, onSuccess, onError): void {
            var formattedAccountId = this.removeBrackets(accountId);
            XrmQuery.retrieveMultiple(o => o.opportunities)
                .select(o => [o.opportunityid])
                .filter(o => Filter.equals(o.customerid_guid, Filter.makeGuid(formattedAccountId)))
                .execute(opportunities => onSuccess(opportunities));
        }
    } 
}