
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { RESPONSIVE_BASE, ResponsiveState } from '../../@core';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged } from 'rxjs/operators';

export abstract class ResponsiveSizeInfo {
    private _subscription: Subscription;
    public replaySubject$: ReplaySubject<any> = new ReplaySubject<any>();
    public subject$: Subject<any> = new Subject<any>();
    constructor( public _responsiveState: ResponsiveState ) { }
    public connect(): void {
        this._subscription = this._responsiveState.elemento$.pipe(distinctUntilChanged())
        .subscribe((data) => {
            console.log('this._responsiveState.elemento$ ===>', data);
            this._updateData(data);
        });
    }
    public disconnect(): void {
        this._subscription.unsubscribe();
    }
    protected _updateData(value: any): void {
            this.replaySubject$.next(value);
            this.subject$.next(value);
    }
}
