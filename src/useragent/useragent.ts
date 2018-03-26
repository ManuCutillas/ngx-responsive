import { Output, EventEmitter, Directive, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResponsiveState } from '../config/index';

@Directive(
{
    selector: '[userAgentInfo]',
    outputs: [ 'info' ]
})
export class UserAgentInfo implements OnInit, OnDestroy {

    private _subscription_UserAgent: Subscription
    public info: EventEmitter <any>= new EventEmitter();
    constructor(
        private _responsiveState: ResponsiveState,
        private cd: ChangeDetectorRef){}
    public ngOnInit(): void {
        this._subscription_UserAgent = this._responsiveState.userAgentObserver.subscribe(this.emitUserAgent.bind( this ));
    }
    public ngOnDestroy(): void {
        this._subscription_UserAgent.unsubscribe();
    }
    emitUserAgent ( value: any ): void {
        this.info.emit( value )
        this.cd.markForCheck();
    }
}
