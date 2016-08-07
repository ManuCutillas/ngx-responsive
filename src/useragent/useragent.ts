import { Output,EventEmitter, Directive, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from  'rxjs/Rx';
import {ResponsiveState} from '../config/config';
import {responsivePattern, responsiveSubscriptions} from '../config/interfaces';

/*======== RESPONSIVE MULTIPLE =========*/
@Directive({
    selector: 'userAgentInfo',outputs:['info']
})
export class UserAgentInfo implements OnInit, OnDestroy {
    private _subscription_UserAgent: Subscription;
    public info:EventEmitter<any> = new EventEmitter();
    ////CONSTRUCTOR
    constructor(private _responsiveState: ResponsiveState) {}
    ////LIFECICLE METHODS
    public ngOnInit(): void { this._subscription_UserAgent = this._responsiveState.userAgentObserver.subscribe(this.emitUserAgent.bind(this)); }
    public ngOnDestroy(): void { this._subscription_UserAgent.unsubscribe(); }
    ////EMIT EVENT
    emitUserAgent (value:any): void { this.info.emit(value); }
}
