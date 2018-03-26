import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ResponsiveState } from '../config/index';

export abstract class UserAgentInfo {

    infoSubject$: Subject<any> = new Subject();
    infoReplySubject$: ReplaySubject<any> = new ReplaySubject();
    _subscription: Subscription;

    constructor(public _responsiveState: ResponsiveState) {}

    connect(): void {
        this._subscription = this._responsiveState.userAgentObserver.subscribe(this.emitUserAgent.bind(this));
    }

    disconnect(): void {
        this._subscription.unsubscribe();
    }

    emitUserAgent(value: any): void {
        this.infoSubject$.next(value);
        this.infoReplySubject$.next(value);
    }
}
