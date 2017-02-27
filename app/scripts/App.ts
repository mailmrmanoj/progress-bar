///<reference path="Reference.ts"/>
module ProgressBar {
    "use strict";
    export class App {
        module: ng.IModule;

        constructor() {
            var dependencies = [ProgressBar.ProgressBarConstants.CONTROLLERS, "ui.bootstrap"];
            this.module = angular.module(ProgressBar.ProgressBarConstants.MODULE, dependencies);
            var bootstraper = new ProgressBar.Bootstrapper(this.module);
            bootstraper.bootstrap();
        }

    };
    new App();
}
