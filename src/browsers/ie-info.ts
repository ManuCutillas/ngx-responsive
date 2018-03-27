
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ResponsiveState } from '../config/index';
import { Observable } from 'rxjs/Observable';

export abstract class IeInfo {
    public currentstate: string;
    public _subscription: Subscription;
    public noRepeat: string;
    public ieVersionSubject$: Subject<any> = new Subject();
    public ieVersionReplaySubject$: ReplaySubject<any> = new ReplaySubject();
    constructor(public _responsiveState: ResponsiveState) { }

    connect() {
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this));
    }
    disconnect() {
        this._subscription.unsubscribe();
    }
    getSubjectIEVersion(): Observable<any> {
        return this.ieVersionSubject$.asObservable();
    }
    getReplaySubjectIEVersion(): Observable<any> {
        return this.ieVersionReplaySubject$.asObservable();
    }
    updateData(value: any) {
        let update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.ieVersionSubject$.next(value);
            this.ieVersionReplaySubject$.next(value);
        }
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
