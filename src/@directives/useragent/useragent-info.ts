import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ResponsiveState } from '../../@core';
import { Observable } from 'rxjs/Observable';

export abstract class UserAgentInfo {

    infoSubject$: Subject<any> = new Subject();
    infoReplySubject$: ReplaySubject<any> = new ReplaySubject();
    _subscription: Subscription;

    constructor(public _responsiveState: ResponsiveState) {}

    connect(): void {
        this._subscription = this._responsiveState.userAgent$.subscribe(this.emitUserAgent.bind(this));
    }

    disconnect(): void {
        this._subscription.unsubscribe();
    }

    getSubjectUserAgent(): Observable<any> {
        return this.infoSubject$.asObservable();
    }

    getReplaySubjectUserAgent(): Observable<any> {
        return this.infoReplySubject$.asObservable();
    }

    emitUserAgent(value: any): void {
        this.infoSubject$.next(value);
        this.infoReplySubject$.next(value);
    }
}
