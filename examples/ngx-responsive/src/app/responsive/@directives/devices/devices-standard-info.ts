import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { ResponsiveState } from '../../@core';

export abstract class DeviceStandardInfo {
    public currentstate: string;
    public _subscription: Subscription;
    public noRepeat: string;
    public standardSubject$: Subject<any> = new Subject();
    public standardReplaySubject$: ReplaySubject<any> = new ReplaySubject();
    constructor( protected _responsiveState: ResponsiveState ) {}
    connect() {
        this._subscription = this._responsiveState.standard$.subscribe(this.updateData.bind( this ));
    }
    disconnect() {
        this._subscription.unsubscribe();
    }
    updateData( value: any ) {
        const update = this._ifValueChanged( this.noRepeat, value );
        if ( update ) {
            this.standardSubject$.next(value);
            this.standardReplaySubject$.next(value);
        }
    }
    getSubjectStandardDevice(): Observable<any> {
        return this.standardSubject$.asObservable();
    }
    getReplaySubjectStandardDevice(): Observable<any> {
        return this.standardReplaySubject$.asObservable();
    }
    _ifValueChanged( oldValue: any, newValue: any ): boolean {
        if ( oldValue === newValue ) {
            return false;
        } else {
            this.noRepeat = newValue;
            return true;
        }
    }
}
