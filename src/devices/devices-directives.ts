import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import {ResponsiveState} from '../config/config';
import {ResponsiveConfigInterface} from '../config/interfaces';
import { REG_TABLETS, REG_MOBILES } from '../config/const';
/*
 * DEVICES DIRECTIVES
 * @Desktops / @Tablets / @Mobile
 *  Work in : Detect device by navigator and refactor the code with abstract class
 */

export abstract class DEVICE_DETECT implements OnInit, OnDestroy {
    
    private noRepeat: number = 0;
    private _grid_state: string[];
    private _subscription: Subscription;
    protected _showWhenTrue: boolean;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
    }


    protected setGrid(grid_state: string[]|string) {
     this._grid_state = <string[]>(Array.isArray(grid_state) ? grid_state : [grid_state]);
    }

    ngOnInit() {
        this._subscription = this._responsiveState.deviceObserver.subscribe(this.updateView.bind(this));
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    private showHide(show: boolean) {
        if (!!show) {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        } else {
            this.noRepeat = 0;
            this.viewContainer.clear();
        }
    }

    updateView(device: string) {
        if(!!this._showWhenTrue){
            this.showHide(!!this._grid_state && this._grid_state.indexOf(device) !== -1);
        }else{
            this.showHide(!(!!this._grid_state && this._grid_state.indexOf(device) !== -1));
        } 
    }
}

/*======== SMART TV STATES =========*/
@Directive({
    selector: '[isSmartTv]',
    providers:[ResponsiveState]
})
export class IsSmartTv extends DEVICE_DETECT{
    protected state: string = 'smarttv';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isSmartTv(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
    
}
    
/*======== DESKTOPS STATES =========*/
@Directive({
    selector: '[isDesktop]',
    providers:[ResponsiveState]
})
export class IsDesktop extends DEVICE_DETECT{
    protected state: string = 'desktop';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isDesktop(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
    
}

/*======== TABLETS STATES =========*/
@Directive({
    selector: '[isTablet]',
    providers:[ResponsiveState]
})
export class IsTablet extends DEVICE_DETECT {
     protected state: string = 'tablet';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isTablet(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== MOBILE STATES =========*/
@Directive({
    selector: '[isMobile]',
    providers:[ResponsiveState]
})

export class IsMobile extends DEVICE_DETECT {
    protected state: string = 'mobile';
    protected _showWhenTrue: boolean = true;

    @Input() set isMobile(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== DEVICE STATES =========*/
@Directive({
    selector: '[showItDevice]',
    providers:[ResponsiveState]
})

export class ShowItDevice extends DEVICE_DETECT {
    protected _showWhenTrue: boolean = true;

    @Input() set showItDevice(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }
    
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

@Directive({
    selector: '[hideItDevice]',
    providers:[ResponsiveState]
})

export class HideItDevice extends DEVICE_DETECT {
    protected _showWhenTrue: boolean = false;

    @Input() set hideItDevice(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }
    
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}


export abstract class STANDARD_DEVICES implements OnInit, OnDestroy {
    
    private noRepeat: number = 0;
    private _grid_state: string[];
    private _subscription: Subscription;
    protected _showWhenTrue: boolean;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
    }


    protected setGrid(grid_state: string[]|string) {
     this._grid_state = <string[]>(Array.isArray(grid_state) ? grid_state : [grid_state]);
    }

    ngOnInit() {
        this._subscription = this._responsiveState.standardObserver.subscribe(this.updateView.bind(this));
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    private showHide(show: boolean) {
        if (!!show) {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        } else {
            this.noRepeat = 0;
            this.viewContainer.clear();
        }
    }

    updateView(device: string) {
        if(!!this._showWhenTrue){
            this.showHide(!!this._grid_state && this._grid_state.indexOf(device) !== -1);
        }else{
            this.showHide(!(!!this._grid_state && this._grid_state.indexOf(device) !== -1));
        } 
    }
}

/*======== IPHONE =========*/
@Directive({
    selector: '[isIphone]',
    providers:[ResponsiveState]
})

export class IsIphone extends STANDARD_DEVICES  {
       protected state: string = 'iphone';
       protected _showWhenTrue: boolean = true;

    @Input() set isIphone(grid_state: string[]|string) {
        this.setGrid(this.state);
    }

    
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

@Directive({
    selector: '[isIpad]',
    providers:[ResponsiveState]
})

export class IsIpad extends STANDARD_DEVICES  {
       protected state: string = 'iphone';
       protected _showWhenTrue: boolean = true;

    @Input() set isIphone(grid_state: string[]|string) {
        this.setGrid(this.state);
    }

    
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

@Directive({
    selector: '[isAndroidMobile]',
    providers:[ResponsiveState]
})

export class IsAndroidMobile extends STANDARD_DEVICES  {
       protected state: string = 'android mobile';
       protected _showWhenTrue: boolean = true;

    @Input() set isAndroidMobile(grid_state: string[]|string) {
        this.setGrid(this.state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

@Directive({
    selector: '[isAndroidTablet]',
    providers:[ResponsiveState]
})

export class IsAndroidTablet extends STANDARD_DEVICES  {
       protected state: string = 'android tablet';
       protected _showWhenTrue: boolean = true;

    @Input() set isAndroidTablet(grid_state: string[]|string) {
        this.setGrid(this.state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}


@Directive({
    selector: '[isWindowsPhone]',
    providers:[ResponsiveState]
})

export class IsWindowsPhone extends STANDARD_DEVICES {
       protected state: string = 'windows phone';
       protected _showWhenTrue: boolean = true;

    @Input() set isWindowsPhone(grid_state: string[]|string) {
        this.setGrid(this.state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}


@Directive({
    selector: '[showItStandard]',
    providers:[ResponsiveState]
})

export class ShowItStandard extends STANDARD_DEVICES  {
       protected _showWhenTrue: boolean = true;

    @Input() set showItStandard(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

@Directive({
    selector: '[hideItStandard]',
    providers:[ResponsiveState]
})

export class HideItStandard extends STANDARD_DEVICES  {
       protected _showWhenTrue: boolean = false;

    @Input() set hideItStandard(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}



export abstract class ORIENTATION implements OnInit, OnDestroy {
    
    private noRepeat: number = 0;
    private _grid_state: string;
    private _subscription: Subscription;
    protected _showWhenTrue: boolean;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
    }


    protected setGrid(grid_state: string) {
     return this._grid_state = grid_state;
    }

    ngOnInit() {
        this._subscription = this._responsiveState.orientationObserver.subscribe(this.updateView.bind(this));
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    private showHide(show: boolean) {
        if (!!show) {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        } else {
            this.noRepeat = 0;
            this.viewContainer.clear();
        }
    }

    updateView(device: string) {
        if(!!this._showWhenTrue){
            this.showHide(!!(this._grid_state == device));
        }else{
            this.showHide(!(!!(this._grid_state == device)));
        } 
    }
}


@Directive({
    selector: '[isPortrait]',
    providers:[ResponsiveState]
})

export class IsPortrait extends STANDARD_DEVICES  {
       protected state: string = 'portrait';
       protected _showWhenTrue: boolean = false;

    @Input() set isPortrait(grid_state:string) {
        this.setGrid(this.state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

@Directive({
    selector: '[isLandscape]',
    providers:[ResponsiveState]
})

export class IsLandscape extends STANDARD_DEVICES  {
       protected state: string = 'landscape';
       protected _showWhenTrue: boolean = false;

    @Input() set isLandscape(grid_state:string) {
        this.setGrid(this.state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}
