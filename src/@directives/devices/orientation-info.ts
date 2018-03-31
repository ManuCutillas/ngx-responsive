import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { ResponsiveState } from '../../@core';

export abstract class OrientationInfo {
    public currentstate: string;
    public _subscription: Subscription;
    public noRepeat: string;
    public orientationSubject$: Subject<any> = new Subject();
    public orientationReplaySubject$: ReplaySubject<any> = new ReplaySubject();
    constructor(protected _responsiveState: ResponsiveState) { }
    connect() {
        this._subscription = this._responsiveState.orientation$.subscribe(this.updateData.bind(this));
    }
    disconnect() {
        this._subscription.unsubscribe();
    }
    updateData(value: any) {
        const update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.orientationSubject$.next(value);
            this.orientationReplaySubject$.next(value);
        }
    }
    getSubjectOrientation(): Observable<any> {
        return this.orientationSubject$.asObservable();
    }
    getReplaySubjectOrientation(): Observable<any> {
        return this.orientationReplaySubject$.asObservable();
    }
    _ifValueChanged(oldValue: any, newValue: any): boolean {
        if (oldValue === newValue) {
            return false;
        } else {
            this.noRepeat = newValue;
            return true;
        }
    }
}
