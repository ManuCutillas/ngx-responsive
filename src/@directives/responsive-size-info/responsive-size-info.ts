
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { RESPONSIVE_BASE, ResponsiveState } from '../../@core';
import { Observable } from 'rxjs/Observable';

export abstract class ResponsiveSizeInfo {
    protected _subscription: Subscription;
    protected _noRepeat: string;
    public emitSizeReplaySubject$: ReplaySubject<any> = new ReplaySubject<any>();
    public emitSizeSubject$: Subject<any> = new Subject<any>();
    constructor(
        public _responsiveState: ResponsiveState,
        public viewContainer: ViewContainerRef) { }
    connect(): void {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this._updateData.bind(this));
    }
    disconnect(): void {
        this._subscription.unsubscribe();
    }
    getSubjectSizeInfo(): Observable<any> {
        return this.emitSizeSubject$.asObservable();
    }
    getReplaySubjectSizeInfo(): Observable<any> {
        return this.emitSizeReplaySubject$.asObservable();
    }
    _updateData(value: any): void {
        const _update = this._ifValueIsChanged(this._noRepeat, value);
        if (_update) {
            this.emitSizeReplaySubject$.next(value);
            this.emitSizeSubject$.next(value);
        }
    }
    _ifValueIsChanged(oldValue: any, newValue: any): boolean {
        if (oldValue === newValue) {
            return false;
        } else {
            this._noRepeat = newValue;
            return true;
        }
    }
}
