var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dyn365DataServices;
(function (Dyn365DataServices) {
    var DataServiceBase = /** @class */ (function () {
        function DataServiceBase() {
        }
        DataServiceBase.prototype.removeBrackets = function (id) {
            return id.replace("{", "").replace("}", "");
        };
        return DataServiceBase;
    }());
    var OpportunityDataService = /** @class */ (function (_super) {
        __extends(OpportunityDataService, _super);
        function OpportunityDataService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OpportunityDataService.prototype.getAccountOpportunities = function (accountId, onSuccess, onError) {
            var formattedAccountId = this.removeBrackets(accountId);
            XrmQuery.retrieveMultiple(function (o) { return o.opportunities; })
                .select(function (o) { return [o.opportunityid]; })
                .filter(function (o) { return Filter.equals(o.customerid_guid, Filter.makeGuid(formattedAccountId)); })
                .execute(function (opportunities) { return onSuccess(opportunities); });
        };
        return OpportunityDataService;
    }(DataServiceBase));
    Dyn365DataServices.OpportunityDataService = OpportunityDataService;
})(Dyn365DataServices || (Dyn365DataServices = {}));
//# sourceMappingURL=dyn365dataservices.js.map