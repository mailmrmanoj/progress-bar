/// <reference path="Reference.ts" />
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