"use strict";
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
UserAgentInfo = __decorate([
    core_1.Directive({
        selector: 'userAgentInfo', outputs: ['info']
    }),
    __metadata("design:paramtypes", [index_1.ResponsiveState,
        core_1.ChangeDetectorRef])
], UserAgentInfo);
exports.UserAgentInfo = UserAgentInfo;
//# sourceMappingURL=useragent.js.map