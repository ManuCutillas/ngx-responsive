"use strict";
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
    return UserAgentInfo;
}());
UserAgentInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'userAgentInfo', outputs: ['info']
            },] },
];
/** @nocollapse */
UserAgentInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.UserAgentInfo = UserAgentInfo;
//# sourceMappingURL=useragent.js.map