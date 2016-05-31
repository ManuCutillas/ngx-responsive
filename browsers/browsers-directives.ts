import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import {ResponsiveState} from '../config/config';
import {ResponsiveConfigInterface} from '../config/interfaces';
import { REG_TABLETS, REG_MOBILES } from '../config/const';

/*
 * BROWSERS DIRECTIVES
 * @CHROME @FIREFOX @IE @OPERA
 *  on work;
 */
abstract class BROWSERS implements OnInit, OnDestroy {
    
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
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateView.bind(this));
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

/*======== CHROME =========*/
@Directive({
    selector: '[isChrome]',
    providers:[ResponsiveState]
})

export class IsChrome extends BROWSERS{
    protected state: string = 'chrome';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isChrome(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== FIREFOX =========*/
@Directive({
    selector: '[isFirefox]',
    providers:[ResponsiveState]
})

export class IsFirefox extends BROWSERS{
    protected state: string = 'firefox';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isFirefox(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
    
}

/*======== SAFARI =========*/
@Directive({
    selector: '[isSafari]',
    providers:[ResponsiveState]
})
export class IsSafari extends BROWSERS{
    protected state: string = 'safari';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isSafari(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
    
}

/*======== OPERA =========*/
@Directive({
    selector: '[isOpera]',
    providers:[ResponsiveState]
})
export class IsOpera extends BROWSERS{
    protected state: string = 'opera';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isOpera(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
    
}

/*======== IE =========*/
@Directive({
    selector: '[isIE]',
    providers:[ResponsiveState]
})
export class IsIE extends BROWSERS{
    protected state: string = 'ie';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isIE(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
    
}

@Directive({
    selector: '[showItBrowser]',
    providers:[ResponsiveState]
})
export class ShowItBrowser extends BROWSERS{
    protected _showWhenTrue: boolean = true;
    
    @Input() set showItBrowser(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    } 
}

@Directive({
    selector: '[hideItBrowser]',
    providers:[ResponsiveState]
})
export class HideItBrowser extends BROWSERS{
    protected _showWhenTrue: boolean = false;
    
    @Input() set hideItBrowser(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    } 
}


abstract class IE_VERSION implements OnInit, OnDestroy {
    
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
        this._subscription = this._responsiveState.ieVersionObserver.subscribe(this.updateView.bind(this));
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

@Directive({
    selector: '[isIE9]',
    providers:[ResponsiveState]
})
export class IsIE9 extends BROWSERS{
    protected state: string = 'ie 9';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isIE9(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    } 
}

@Directive({
    selector: '[isIE10]',
    providers:[ResponsiveState]
})
export class IsIE10 extends BROWSERS{
    protected state: string = 'ie 10';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isIE10(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    } 
}

@Directive({
    selector: '[isIE11]',
    providers:[ResponsiveState]
})
export class IsIE11 extends BROWSERS{
    protected state: string = 'ie 11';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isIE11(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    } 
}

@Directive({
    selector: '[isIE12]',
    providers:[ResponsiveState]
})
export class IsIE12 extends BROWSERS{
    protected state: string = 'ie 12';
    protected _showWhenTrue: boolean = true;
    
    @Input() set isIE12(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    } 
}

@Directive({
    selector: '[showIEVersion]',
    providers:[ResponsiveState]
})
export class ShowIEVersion extends BROWSERS{
    protected _showWhenTrue: boolean = true;
    
    @Input() set showIEVersion(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    } 
}

@Directive({
    selector: '[hideIEVersion]',
    providers:[ResponsiveState]
})
export class HideIEVersion extends BROWSERS{
    protected _showWhenTrue: boolean = false;
    
    @Input() set hideIEVersion(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }
    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    } 
}