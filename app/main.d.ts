/// <reference path="../types/angularjs/angular.d.ts" />
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
    class DemoController {
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
