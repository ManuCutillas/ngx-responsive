/**
 * @name responsive-size-info
 * @description Responsive Size Info abstract class in ngx-responsive
 *
 * @license MIT
 */
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { RESPONSIVE_BASE, ResponsiveState } from '../../@core';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged } from 'rxjs/operators';

export abstract class ResponsiveSizeInfo {
    private _subscription: Subscription;
    public replaySubject$: ReplaySubject<any> = new ReplaySubject<any>();
    constructor( public _responsiveState: ResponsiveState ) { }
    public connect(): Observable<any> {
        this._subscription = this._responsiveState.elemento$.pipe(distinctUntilChanged())
        .subscribe((data) => {
            this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    }
    public disconnect(): void {
        this._subscription.unsubscribe();
    }
    get getResponsiveSize(): Observable<any> {
        return this.replaySubject$.asObservable();
    }
    protected _updateData(value: any): void {
        this.replaySubject$.next(value);
    }
}
