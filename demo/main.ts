///<reference path="./typings/index.d.ts" />
import { Component,enableProdMode, provide,PLATFORM_DIRECTIVES } from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';
import {ResponsiveState, ResponsiveConfig, ResponsiveConfigInterface,RESPONSIVE_DIRECTIVES} from 'responsive-directives-angular2';

//REMOVE
//import {ResponsiveState, ResponsiveConfig, ResponsiveConfigInterface,RESPONSIVE_DIRECTIVES} from './dev/index';


let config: ResponsiveConfigInterface = {
    breakPoints: {
            xs: {max: 600},
            sm: {min: 601, max: 959},
            md: {min: 960, max: 1279},
            lg: {min: 1280, max: 1919},
            xl: {min: 1920}
    },
    debounceTime: 100 // allow to debounce checking timer
};


bootstrap(AppComponent,[
    {
        provide: ResponsiveConfig,
        useFactory: () => new ResponsiveConfig(config)
    },
  ResponsiveState,
  provide(PLATFORM_DIRECTIVES, { useValue: [RESPONSIVE_DIRECTIVES], multi: true})
]);