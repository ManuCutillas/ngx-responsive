/**
 * @name orientation-info
 * @description Orientation abstract class in ngx-responsive
 *
 * @license MIT
 */
import { Subscription } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { distinctUntilChanged } from 'rxjs/operators';

export abstract class OrientationInfo {
    public currentstate: string;
    private _subscription: Subscription;
    public replaySubject$: ReplaySubject<any> = new ReplaySubject();
    constructor(protected _responsiveState: ResponsiveState) { }
    public connect(): Observable<any> {
        this._subscription = this._responsiveState.orientation$.pipe(distinctUntilChanged())
        .subscribe((data) => {
            this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    }
    public disconnect(): void {
        this._subscription.unsubscribe();
    }
    get getOrientation(): Observable<any> {
        return this.replaySubject$.asObservable();
    }
    protected _updateData(value: any): void {
        this.replaySubject$.next(value);
    }
}
