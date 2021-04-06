/**
 *  @name bootstrap.directives
 *  @description bootstrap directives
 *  @license MIT
 */
import { ChangeDetectorRef, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';

@Directive({
    selector: '[xl]',
})
export class XlDirective extends RESPONSIVE_BASE<any> {
    protected _state = 'xl';
    protected _showWhenTrue = true;

    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState,
        cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this.setGrid(this._state, 'bootstrap');
    }
}

@Directive({
    selector: '[lg]',
})
export class LgDirective extends RESPONSIVE_BASE<any> {
    protected _state = 'lg';
    protected _showWhenTrue = true;
    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState,
        cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this.setGrid(this._state, 'bootstrap');
    }
}

@Directive({
    selector: '[lgUp]',
})
export class LgUpDirective extends RESPONSIVE_BASE<any> {
    protected _state = 'lgUp';
    protected _showWhenTrue = true;
    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState,
        cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this.setGrid(this._state, 'bootstrap');
    }
}

@Directive({
    selector: '[md]',
})
export class MdDirective extends RESPONSIVE_BASE<any> {
    protected _state = 'md';
    protected _showWhenTrue = true;

    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState,
        cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this.setGrid(this._state, 'bootstrap');
    }
}

@Directive({
    selector: '[mdUp]',
})
export class MdUpDirective extends RESPONSIVE_BASE<any> {
    protected _state = 'mdUp';
    protected _showWhenTrue = true;

    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState,
        cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this.setGrid(this._state, 'bootstrap');
    }
}

@Directive({
    selector: '[sm]',
})
export class SmDirective extends RESPONSIVE_BASE<any> {
    protected _state = 'sm';
    protected _showWhenTrue = true;

    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState,
        cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this.setGrid(this._state, 'bootstrap');
    }
}

@Directive({
    selector: '[smUp]',
})
export class SmUpDirective extends RESPONSIVE_BASE<any> {
    protected _state = 'smUp';
    protected _showWhenTrue = true;

    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState,
        cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this.setGrid(this._state, 'bootstrap');
    }
}

@Directive({
    selector: '[xs]',
})
export class XsDirective extends RESPONSIVE_BASE<any> {
    protected _state = 'xs';
    protected _showWhenTrue = true;

    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState,
        cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this.setGrid(this._state, 'bootstrap');
    }
}

@Directive({
    selector: '[showItBootstrap]',
})
export class ShowItBootstrapDirective extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue = true;
    @Input() set showItBootstrap(grid_state: string[] | string) {
        this.setGrid(grid_state, 'bootstrap');
    }
    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState,
        cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
    }
}
@Directive({
    selector: '[hideItBootstrap]',
})
export class HideItBootstrapDirective extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue = false;

    @Input() set hideItBootstrap(grid_state: string[] | string) {
        this.setGrid(grid_state, 'bootstrap');
    }
    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState,
        cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
    }
}
