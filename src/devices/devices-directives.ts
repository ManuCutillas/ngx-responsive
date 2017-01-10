import {Output, EventEmitter, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from  'rxjs/Rx';
import {ResponsiveState, RESPONSIVE_BASE } from '../config/index';

/*
 * DEVICES DIRECTIVES
 * @Desktops / @Tablets / @Mobile
 */

/*======== SMART TV STATES =========*/
@Directive({
    selector: '[isSmartTv]'
})
export class IsSmartTv extends RESPONSIVE_BASE<any>{
    protected _state: string = 'smarttv';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isSmartTv(grid_state: string[]|string) {
        this.setGrid(this._state,'device');
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
    
}
    
/*======== DESKTOPS STATES =========*/
@Directive({
    selector: '[isDesktop]'
})
export class IsDesktop extends RESPONSIVE_BASE<any>{
    protected _state: string = 'desktop';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isDesktop(grid_state: string[]|string) {
        this.setGrid(this._state,'device');
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
    
}

/*======== TABLETS STATES =========*/
@Directive({
    selector: '[isTablet]'
})
export class IsTablet extends RESPONSIVE_BASE<any>{
     protected _state: string = 'tablet';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isTablet(grid_state: string[]|string) {
        this.setGrid(this._state,'device');
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== MOBILE STATES =========*/
@Directive({
    selector: '[isMobile]'
})

export class IsMobile extends RESPONSIVE_BASE<any>{
    protected _state: string = 'mobile';
    protected _showWhenTrue: boolean = true;

    @Input() set isMobile(grid_state: string[]|string) {
        this.setGrid(this._state,'device');
    }
    
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== DEVICE STATES =========*/
@Directive({
    selector: '[showItDevice]'
})

export class ShowItDevice extends RESPONSIVE_BASE<any>{
    protected _showWhenTrue: boolean = true;

    @Input() set showItDevice(grid_state: string[]|string) {
        this.setGrid(grid_state,'device');
    }
    
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

@Directive({
    selector: '[hideItDevice]'
})

export class HideItDevice extends RESPONSIVE_BASE<any>{
    protected _showWhenTrue: boolean = false;

    @Input() set hideItDevice(grid_state: string[]|string) {
        this.setGrid(grid_state,'device');
    }
    
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}



/*
 * STANDARD DEVICES DIRECTIVES
 * @isIphone / @isIpad / @isAndroidMobile / @isAndroidTablet / @IsWindowsPhone
 */

/*======== IPHONE =========*/
@Directive({
    selector: '[isIphone]'
})
export class IsIphone extends RESPONSIVE_BASE<any>{
       protected _state: string = 'iphone';
       protected _showWhenTrue: boolean = true;

    @Input() set isIphone(grid_state: string[]|string) {
        this.setGrid(this._state,'standard');
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

@Directive({
    selector: '[isIpad]'
})

export class IsIpad extends RESPONSIVE_BASE<any>{
       protected _state: string = 'iphone';
       protected _showWhenTrue: boolean = true;

    @Input() set isIphone(grid_state: string[]|string) {
        this.setGrid(this._state,'standard');
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

@Directive({
    selector: '[isAndroidMobile]'
})

export class IsAndroidMobile extends RESPONSIVE_BASE<any>{
       protected _state: string = 'android mobile';
       protected _showWhenTrue: boolean = true;

    @Input() set isAndroidMobile(grid_state: string[]|string) {
        this.setGrid(this._state,'standard');
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

@Directive({
    selector: '[isAndroidTablet]'
})

export class IsAndroidTablet extends RESPONSIVE_BASE<any>{
       protected _state: string = 'android tablet';
       protected _showWhenTrue: boolean = true;

    @Input() set isAndroidTablet(grid_state: string[]|string) {
        this.setGrid(this._state,'standard');
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}


@Directive({
    selector: '[isWindowsPhone]'
})

export class IsWindowsPhone extends RESPONSIVE_BASE<any>{
       protected _state: string = 'windows phone';
       protected _showWhenTrue: boolean = true;

    @Input() set isWindowsPhone(grid_state: string[]|string) {
        this.setGrid(this._state,'standard');
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}


@Directive({
    selector: '[showItStandard]'
})

export class ShowItStandard extends RESPONSIVE_BASE<any>{
       protected _showWhenTrue: boolean = true;

    @Input() set showItStandard(grid_state: string[]|string) {
        this.setGrid(grid_state,'standard');
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

@Directive({
    selector: '[hideItStandard]'
})

export class HideItStandard extends RESPONSIVE_BASE<any>{
       protected _showWhenTrue: boolean = false;

    @Input() set hideItStandard(grid_state: string[]|string) {
        this.setGrid(grid_state,'standard');
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}



/*
 * ORIENTATION DEVICES DIRECTIVES
 * @isIphone / @isPortrait / @isLandscape
 */

@Directive({
    selector: '[isPortrait]'
})

export class IsPortrait extends RESPONSIVE_BASE<any>{
       protected _state: string = 'portrait';
       protected _showWhenTrue: boolean = false;

    @Input() set isPortrait(grid_state:string) {
        this.setGrid(this._state,"orientation");
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

@Directive({
    selector: '[isLandscape]'
})

export class IsLandscape extends RESPONSIVE_BASE<any>{
       protected _state: string = 'landscape';
       protected _showWhenTrue: boolean = false;

    @Input() set isLandscape(grid_state:string) {
        this.setGrid(this._state,"orientation");
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }           
}

//NEXT TO REFACTOR
/*======== DeviceInfo =========*/
/* DeviceInfo */
@Directive({
    selector: "deviceInfo"
})
export class DeviceInfo implements OnInit,OnDestroy {
    public currentstate: string;
    private _subscription: Subscription;
    private noRepeat:string;

    public set responsiveSizeInfo(grid_state: string[]|string) {
        this.updateData(this.currentstate);
    }
    @Output() device:EventEmitter<any> = new EventEmitter();
    constructor(private _responsiveState: ResponsiveState,
                private viewContainer: ViewContainerRef) {}

    ngOnInit() {
        this._subscription = this._responsiveState.deviceObserver.subscribe(this.updateData.bind(this),
            value => {
                this.currentstate = value
            });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
   
    updateData(value: any) {
        let update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.device.emit(value);
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



/*======== deviceStandardInfo =========*/
@Directive({
    selector: "deviceStandardInfo",inputs:['deviceStandardInfo'], outputs:['standard']
})
export class DeviceStandardInfo implements OnInit,OnDestroy {
    public currentstate: string;
    private _subscription: Subscription;
    private noRepeat:string;

    set deviceStandardInfo(grid_state: string[]|string) {
        this.updateData(this.currentstate);
    }
    
    public standard:EventEmitter<any> = new EventEmitter();
    constructor(private _responsiveState: ResponsiveState,
                private viewContainer: ViewContainerRef) {}

    ngOnInit() {
        this._subscription = this._responsiveState.standardObserver.subscribe(this.updateData.bind(this),
            value => {
                this.currentstate = value
            });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
   
    updateData(value: any) {
        let update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.standard.emit(value);
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

/*======== OrientationInfo =========*/
@Directive({
    selector: "orientationInfo",
    outputs:['orientation']
})
export class OrientationInfo implements OnInit,OnDestroy {
    public currentstate: string;
    private _subscription: Subscription;
    private noRepeat:string;

    set responsiveSizeInfo(grid_state: string[]|string) {
        this.updateData(this.currentstate);
    }
    
    public orientation:EventEmitter<any> = new EventEmitter();
    constructor(private _responsiveState: ResponsiveState,
                private viewContainer: ViewContainerRef) {}

    ngOnInit() {
        this._subscription = this._responsiveState.orientationObserver.subscribe(this.updateData.bind(this),
            value => {
                this.currentstate = value
            });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
   
    updateData(value: any) {
        let update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.orientation.emit(value);
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
