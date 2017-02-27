///<reference path="Reference.ts"/>
module ProgressBar {
    export class Bootstrapper {
        constructor(public module: ng.IModule) {
        }
        bootstrap() {
            this.module.config(["$httpProvider", ($httpProvider: any) =>
                this.initializeConfig($httpProvider)]);
        }
        initializeConfig($httpProvider: ng.IHttpProvider) {
        }
    }
}
