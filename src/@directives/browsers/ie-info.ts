import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { ResponsiveState } from '../../@core';
import { distinctUntilChanged } from 'rxjs/operators';

export abstract class IeInfo {
    public currentstate: string;
    private _subscription: Subscription;
    public ieVersionSubject$: Subject<any> = new Subject();
    public ieVersionReplaySubject$: ReplaySubject<any> = new ReplaySubject();
    constructor(public _responsiveState: ResponsiveState) { }
    public connect() {
        this._subscription = this._responsiveState.ieVersion$.pipe(distinctUntilChanged())
        .subscribe((data) => {
            console.log('this._responsiveState.ieVersion$ ===>', data);
            this._updateData(data);
        });
    }
    public disconnect() {
        this._subscription.unsubscribe();
    }
    protected _updateData(value: any) {
        this.ieVersionSubject$.next(value);
        this.ieVersionReplaySubject$.next(value);
    }
}
