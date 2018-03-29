
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ResponsiveState } from '../../@core';
import { Observable } from 'rxjs/Observable';

export abstract class BrowserInfo {

    public currentstate: string;
    public _subscription: Subscription;
    public noRepeat: string;

    public browserSubject$: Subject<any> = new Subject();
    public browserReplaySubject$: ReplaySubject<any> = new ReplaySubject();

    constructor(public _responsiveState: ResponsiveState) {}

    connect(): void {
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this));
    }

    disconnect(): void {
        this._subscription.unsubscribe();
    }
    updateData(value: any): void {
        let update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.browserSubject$.next(value);
            this.browserReplaySubject$.next(value);
        }
    }

    getSubjectBrowser(): Observable<any> {
        return this.browserSubject$.asObservable();
    }

    getReplaySubjectBrowser(): Observable<any> {
        return this.browserReplaySubject$.asObservable();
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
