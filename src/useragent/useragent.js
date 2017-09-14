"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../config/index");
var UserAgentInfo = (function () {
    function UserAgentInfo(_responsiveState, cd) {
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this.info = new core_1.EventEmitter();
    }
    UserAgentInfo.prototype.ngOnInit = function () {
        this._subscription_UserAgent = this._responsiveState.userAgentObserver.subscribe(this.emitUserAgent.bind(this));
    };
    UserAgentInfo.prototype.ngOnDestroy = function () {
        this._subscription_UserAgent.unsubscribe();
    };
    UserAgentInfo.prototype.emitUserAgent = function (value) {
        this.info.emit(value);
        this.cd.markForCheck();
    };
    UserAgentInfo = __decorate([
        core_1.Directive({
            selector: 'userAgentInfo', outputs: ['info']
        }),
        __metadata("design:paramtypes", [index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], UserAgentInfo);
    return UserAgentInfo;
}());
exports.UserAgentInfo = UserAgentInfo;
//# sourceMappingURL=useragent.js.map