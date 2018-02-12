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
var TypeScriptDyn365Demo;
(function (TypeScriptDyn365Demo) {
    ;
    var Activity = /** @class */ (function () {
        function Activity() {
            console.log("Activity created");
        }
        Activity.prototype.start = function (startDate) {
            this.startDate = startDate;
        };
        Activity.prototype.close = function () {
            this.enddate = new Date();
        };
        return Activity;
    }());
    TypeScriptDyn365Demo.Activity = Activity;
    ;
    var TextMessage = /** @class */ (function (_super) {
        __extends(TextMessage, _super);
        function TextMessage(from, to) {
            var _this = _super.call(this) || this;
            console.log("Text message created");
            return _this;
        }
        TextMessage.prototype.send = function (message) {
            return true;
        };
        return TextMessage;
    }(Activity));
    TypeScriptDyn365Demo.TextMessage = TextMessage;
    var message = new TextMessage("pg@wp.pl", "ewa@gmail.com");
    message.start(new Date());
    var result = message.send("Hello message!");
    if (result) {
        message.close();
    }
})(TypeScriptDyn365Demo || (TypeScriptDyn365Demo = {}));
//# sourceMappingURL=Activity.js.map