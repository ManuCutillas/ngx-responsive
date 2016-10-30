"use strict";
var core_1 = require('@angular/core');
var config_1 = require('../config');
/*======== RESPONSIVE MULTIPLE =========*/
var UserAgentInfo = (function () {
    ////CONSTRUCTOR
    function UserAgentInfo(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.info = new core_1.EventEmitter();
    }
    ////LIFECICLE METHODS
    UserAgentInfo.prototype.ngOnInit = function () { this._subscription_UserAgent = this._responsiveState.userAgentObserver.subscribe(this.emitUserAgent.bind(this)); };
    UserAgentInfo.prototype.ngOnDestroy = function () { this._subscription_UserAgent.unsubscribe(); };
    ////EMIT EVENT
    UserAgentInfo.prototype.emitUserAgent = function (value) { this.info.emit(value); };
    UserAgentInfo.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'userAgentInfo', outputs: ['info']
                },] },
    ];
    /** @nocollapse */
    UserAgentInfo.ctorParameters = [
        { type: config_1.ResponsiveState, },
    ];
    return UserAgentInfo;
}());
exports.UserAgentInfo = UserAgentInfo;
//# sourceMappingURL=useragent.js.map