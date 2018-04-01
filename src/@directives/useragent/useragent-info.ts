import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ResponsiveState } from '../../@core';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged } from 'rxjs/operators';
export abstract class UserAgentInfo {

    public subject$: Subject<any> = new Subject();
    public replySubject$: ReplaySubject<any> = new ReplaySubject();
    private _subscription: Subscription;
    constructor(public _responsiveState: ResponsiveState) {}
    connect(): void {
        this._subscription = this._responsiveState.userAgent$.pipe(distinctUntilChanged())
        .subscribe((data) => {
            console.log('this._responsiveState.userAgent$ ===>', data);
            this.emitUserAgent(data);
        });
    }
    disconnect(): void {
        this._subscription.unsubscribe();
    }
    protected emitUserAgent(value: any): void {
        this.subject$.next(value);
        this.replySubject$.next(value);
    }
}
