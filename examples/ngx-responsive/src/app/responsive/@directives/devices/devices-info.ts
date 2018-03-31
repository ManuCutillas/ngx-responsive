import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { ResponsiveState } from '../../@core';

export abstract class DevicesInfo {
    public currentstate: string;
    public _subscription: Subscription;
    public noRepeat: string;
    public deviceInfoSubject$: Subject<any> = new Subject();
    public deviceInfoReplaySubject$: ReplaySubject<any> = new ReplaySubject();
    constructor(protected _responsiveState: ResponsiveState) { }
    connect() {
        this._subscription = this._responsiveState.device$.subscribe(this.updateData.bind(this));
    }
    disconnect() {
        this._subscription.unsubscribe();
    }
    getSubjectDeviceInfo(): Observable<any> {
        return this.deviceInfoSubject$.asObservable();
    }
    getReplaySubjectDeviceInfo(): Observable<any> {
        return this.deviceInfoReplaySubject$.asObservable();
    }
    updateData(value: any) {
        const update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.deviceInfoSubject$.next(value);
            this.deviceInfoReplaySubject$.next(value);
        }
    }
    getSubjectDevice(): Observable<any> {
        return this.deviceInfoSubject$.asObservable();
    }
    getReplaySubjectDevice(): Observable<any> {
        return this.deviceInfoReplaySubject$.asObservable();
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
