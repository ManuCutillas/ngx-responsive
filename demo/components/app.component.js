System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.thisUserAgent = function (value) {
                        console.info('useragent ==>', value);
                    };
                }
                AppComponent.prototype.ngOnInit = function () { };
                AppComponent.prototype.listenchanges = function (value) {
                    console.info(value);
                };
                AppComponent.prototype.thisdevice = function (value) {
                    switch (value) {
                        case "smarttv":
                            console.info('device ==>', value);
                            this.smarttv = true;
                            break;
                        case "desktop":
                            console.info('device ==>', value);
                            this.desktop = true;
                            break;
                        case "tablet":
                            console.info('device ==>', value);
                            this.tablet = true;
                            break;
                        case "mobile":
                            console.info('device ==>', value);
                            this.mobile = true;
                            break;
                        default:
                            this.smarttv, this.desktop, this.tablet, this.mobile = false;
                    }
                };
                AppComponent.prototype.thispixelratio = function (value) {
                    switch (value) {
                        case "4k":
                            console.info('pixel ratio ==>', value);
                            this.pixel4k = true;
                            break;
                        case "retina":
                            console.info('pixel ratio ==>', value);
                            this.retina = true;
                            break;
                        case "1x":
                            console.info('pixel ratio ==>', value);
                            this.pixel1x = true;
                            break;
                        default:
                            this.pixel4k, this.retina, this.pixel1x = false;
                    }
                };
                AppComponent.prototype.thisorientation = function (value) {
                    switch (value) {
                        case "portrait":
                            console.info('orientation ==>', value);
                            this.portrait = true;
                            break;
                        case "landscape":
                            console.info('orientation ==>', value);
                            this.landscape = true;
                            break;
                        default:
                            this.portrait, this.landscape = false;
                    }
                };
                AppComponent.prototype.mystates = function (value) {
                    switch (value) {
                        case "xl":
                            console.info('bootstrap_state ==>', value);
                            this.xl = true;
                            this.lg, this.md, this.sm, this.xs = false;
                            break;
                        case "lg":
                            console.info('bootstrap_state ==>', value);
                            this.xl, this.md, this.sm, this.xs = false;
                            this.lg = true;
                            break;
                        case "md":
                            console.info('bootstrap_state ==>', value);
                            this.xl, this.lg, this.sm, this.xs = false;
                            this.md = true;
                            break;
                        case "sm":
                            console.info('bootstrap_state ==>', value);
                            this.xl, this.lg, this.md, this.xs = false;
                            this.sm = true;
                            break;
                        case "xs":
                            console.info('bootstrap_state ==>', value);
                            this.xl, this.lg, this.md, this.sm = false;
                            this.xs = true;
                            break;
                        default:
                            this.xs, this.lg, this.md, this.sm, this.xs = false;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'app',
                        templateUrl: 'components/app.component.html',
                        styleUrls: ['components/app.component.css'],
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map