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
        var ProgressBarController = (function () {
            function ProgressBarController($scope) {
                $scope.dynamic = 25;
                $scope.max = 100;
                $scope.min = 0;
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
            ProgressBarController.$inject = ["$scope"];
            return ProgressBarController;
        })();
        Controllers.ProgressBarController = ProgressBarController;
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
describe('calculator', function () {
    beforeEach(angular.mock.inject('angular.progressbar'));
    var $controller, progressBarController, scope;
    beforeEach(angular.mock.inject(function ($rootScope, _$controller_) {
        scope = $rootScope.$new();
        progressBarController = _$controller_('ProgressBarController', {
            $scope: scope
        });
    }));
    describe('Test case for progress bar controler', function () {
        it('Expect variables are assigned', function () {
            expect(scope.dynamic).toBe(25);
            expect(scope.max).toBe(100);
            expect(scope.min).toBe(0);
        });
        it('Expect incrementProgress increments value by 25/10', function () {
            scope.incrementProgress(25);
            scope.$apply();
            expect(scope.dynamic).toBe(50);
        });
        it('Expect decrementProgress decrements value by 25/10', function () {
            scope.decrementProgress(25);
            scope.$apply();
            expect(scope.dynamic).toBe(0);
        });
    });
});
//# sourceMappingURL=main.js.map