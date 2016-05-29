import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';

export interface ResponsiveConfigInterface {
    breakPoints: {
        xs: {max: number},
        sm: {min: number, max: number},
        md: {min: number, max: number},
        lg: {min: number, max: number},
        xl: {min: number}
    },
    debounceTime: number
}
// Configuration class in order to allow to change breakpoints values
@Injectable()
export class ResponsiveConfig {
    config: ResponsiveConfigInterface = {
        breakPoints: {
            xs: {max: 767},
            sm: {min: 768, max: 991},
            md: {min: 992, max: 1199},
            lg: {min: 1200, max: 1599},
            xl: {min: 1600}
        },
        debounceTime: 100
    };


    constructor(@Optional() config?: ResponsiveConfigInterface) {
        if (!!config)
            this.config = config;
    }
}

@Injectable()
export class ResponsiveState {
    private _responsiveConfig: ResponsiveConfig;
    elementoObservar: Observable<string>;
    anchoObservar: Observable<number>;
    width: number;

    //Optional es un ternario.
    constructor(@Optional() responsiveConfig: ResponsiveConfig) {
        this._responsiveConfig = !!responsiveConfig ? responsiveConfig : new ResponsiveConfig();
        let observer = Observable
            .fromEvent(window, 'resize')
            .debounceTime(this._responsiveConfig.config.debounceTime)
            .defaultIfEmpty()
            .startWith(this.getWidth());

        this.elementoObservar = observer.map(this.sizeOperations);//.share() //todo share seems to break startWith behavior;
        this.anchoObservar = observer.map(this.sizeObserver);//.share();
    }


    private sizeObserver = (): number => {
        return this.width = this.getWidth();
    };

    private sizeOperations = (): string => {
        this.width = this.getWidth();
        try {
            let breakpoints = this._responsiveConfig.config.breakPoints;
            if (breakpoints.xl.min <= this.width) {
                return 'xl';
            } else if (breakpoints.lg.max >= this.width && breakpoints.lg.min <= this.width) {
                return 'lg';
            } else if (breakpoints.md.max >= this.width && breakpoints.md.min <= this.width) {
                return 'md';
            } else if (breakpoints.sm.max >= this.width && breakpoints.sm.min <= this.width) {
                return 'sm';
            } else if (breakpoints.xs.max >= this.width) {
                return 'xs';
            }
        } catch (error) {
            //console.error('size operations error :', error);
        }
        return null;
    };

    getWidth(): number {
        return window.innerWidth;
    }

    getDeviceSizeInitial(): string {
        return this.sizeOperations();
    }
}


/*======== responsiveSizeInfo =========*/
/* responsiveSizeInfo */
@Directive({
    selector: "[responsiveSizeInfo]",
    exportAs: "responsiveSizeInfoCtrl"
})
export class ResponsiveSizeInfo implements OnInit {
    public currentOperation: string;

    constructor(private _responsiveState: ResponsiveState) {
        this._responsiveState.elementoObservar.subscribe(value => {
            this.currentOperation = value
        });
    }

    ngOnInit() {
    }
}
