/// <reference path="../types/angularjs/angular.d.ts" />
/// <reference path="../types/angularjs/angular-mocks.d.ts" />
/// <reference path="../types/jasmine/jasmine.d.ts" />
declare module ProgressBar {
    class ProgressBarConstants {
        static MODULE: string;
        static CONTROLLERS: string;
    }
}
declare module ProgressBar {
    class Bootstrapper {
        module: ng.IModule;
        constructor(module: ng.IModule);
        bootstrap(): void;
        initializeConfig($httpProvider: ng.IHttpProvider): void;
    }
}
declare module ProgressBar.Controllers {
    class ProgressBarController {
        static $inject: string[];
        constructor($scope: any);
    }
}
declare module ProgressBar {
    class App {
        module: ng.IModule;
        constructor();
    }
}
