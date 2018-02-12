var Dyn365Common;
(function (Dyn365Common) {
    var Navigation = /** @class */ (function () {
        function Navigation() {
        }
        Navigation.prototype.openUrl = function (url, options) {
            Xrm.Navigation.openUrl(url, options);
        };
        return Navigation;
    }());
    Dyn365Common.Navigation = Navigation;
    var Device = /** @class */ (function () {
        function Device() {
        }
        return Device;
    }());
    Dyn365Common.Device = Device;
    var Utility = /** @class */ (function () {
        function Utility() {
        }
        return Utility;
    }());
    Dyn365Common.Utility = Utility;
})(Dyn365Common || (Dyn365Common = {}));
//# sourceMappingURL=dyn365common.js.map