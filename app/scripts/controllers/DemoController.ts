///<reference path="Reference.ts"/>
module ProgressBar.Controllers {
    import globalConstants = ProgressBar.ProgressBarConstants;
    export class DemoController {
        static $inject = ["$scope"];

        constructor($scope) {
            $scope.dynamic = 25;
            $scope.max = 100;
            $scope.min = 0;
            $scope.isDecrementButtonDisabled = false;
            function compareValue(value) {
                value = (value == 25) ? 25 : 10;
                return value;

            }
            $scope.incrementProgress = function (value) {
                let changedValue = $scope.dynamic + compareValue(value);;
                $scope.dynamic = changedValue > 100 ? 100 : changedValue;
            }
            $scope.decrementProgress = function (value) {
                let changedValue = $scope.dynamic - compareValue(value);
                $scope.dynamic = changedValue < 0 ? 0 : changedValue;
            }
        }
    }
}