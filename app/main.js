var ProgressBar;
(function (ProgressBar) {
    var ProgressBarConstants = (function () {
        function ProgressBarConstants() {
        }
        ProgressBarConstants.MODULE = "angular.progressbar";
        ProgressBarConstants.CONTROLLERS = "angular.progressbar.controllers";
        return ProgressBarConstants;
    })();
    ProgressBar.ProgressBarConstants = ProgressBarConstants;
})(ProgressBar || (ProgressBar = {}));
var ProgressBar;
(function (ProgressBar) {
    var Bootstrapper = (function () {
        function Bootstrapper(module) {
            this.module = module;
        }
        Bootstrapper.prototype.bootstrap = function () {
            var _this = this;
            this.module.config(["$httpProvider", function ($httpProvider) {
                    return _this.initializeConfig($httpProvider);
                }]);
        };
        Bootstrapper.prototype.initializeConfig = function ($httpProvider) {
        };
        return Bootstrapper;
    })();
    ProgressBar.Bootstrapper = Bootstrapper;
})(ProgressBar || (ProgressBar = {}));
var ProgressBar;
(function (ProgressBar) {
    var Controllers;
    (function (Controllers) {
        var DemoController = (function () {
            function DemoController($scope) {
                $scope.dynamic = 25;
                $scope.max = 100;
                $scope.min = 0;
                $scope.isDecrementButtonDisabled = false;
                function compareValue(value) {
                    value = (value == 25) ? 25 : 10;
                    return value;
                }
                $scope.incrementProgress = function (value) {
                    var changedValue = $scope.dynamic + compareValue(value);
                    ;
                    $scope.dynamic = changedValue > 100 ? 100 : changedValue;
                };
                $scope.decrementProgress = function (value) {
                    var changedValue = $scope.dynamic - compareValue(value);
                    $scope.dynamic = changedValue < 0 ? 0 : changedValue;
                };
            }
            DemoController.$inject = ["$scope"];
            return DemoController;
        })();
        Controllers.DemoController = DemoController;
    })(Controllers = ProgressBar.Controllers || (ProgressBar.Controllers = {}));
})(ProgressBar || (ProgressBar = {}));
var ProgressBar;
(function (ProgressBar) {
    "use strict";
    var App = (function () {
        function App() {
            var dependencies = [ProgressBar.ProgressBarConstants.CONTROLLERS, "ui.bootstrap"];
            this.module = angular.module(ProgressBar.ProgressBarConstants.MODULE, dependencies);
            var bootstraper = new ProgressBar.Bootstrapper(this.module);
            bootstraper.bootstrap();
        }
        return App;
    })();
    ProgressBar.App = App;
    ;
    new App();
})(ProgressBar || (ProgressBar = {}));
angular.module(ProgressBar.ProgressBarConstants.CONTROLLERS, []).controller(ProgressBar.Controllers);
//# sourceMappingURL=main.js.map