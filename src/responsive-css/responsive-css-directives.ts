import {Injectable, Component, EventEmitter, Input, Output, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import {ResponsiveState} from '../config/config';
import {ResponsiveConfigInterface} from '../config/interfaces';


/*======== XL STATES =========*/
@Component({
    selector: 'resonsiveCss',
    template: ''
})
export class ResponsiveCss implements OnInit, OnDestroy {

    constructor(private elementRef: ElementRef,
                private _responsiveState: ResponsiveState) {
        //TODO use absurdjs to generate css classes?
    }


    ngOnInit() {
        let css: string[] = [];
        let breakpoints = this._responsiveState.getBreakpoints();

        ["xs", "sm", "md", "lg", "xl"].forEach((code)=> {
            if(breakpoints.hasOwnProperty(code)){
                let media: string[] = [];
                let breakpoint:{min?, max?} = breakpoints[code];
                if(breakpoint.hasOwnProperty('min'))
                    media.push(`(min-width: ${breakpoint.min}px)`);
                if(breakpoint.hasOwnProperty('max'))
                    media.push(`(max-width: ${breakpoint.max}px)`);
                if(media.length>0){
                    css.push(`@media ${media.join(" AND ")}{`);
                    css.push(`.hide-${code}{display: none!important;}`);
                    css.push(`.hide:not(.show-${code}){display: none!important;}`);
                    css.push(`}`);
                }
            }
        });

        let el: HTMLElement = this.elementRef.nativeElement;
        el.innerHTML = "<style>" + css.join('\n') + "</style>";
    }

    ngOnDestroy() {
    }

}
