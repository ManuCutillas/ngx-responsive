import { Component,enableProdMode, provide,PLATFORM_DIRECTIVES } from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';
import {ResponsiveState, ResponsiveConfig, ResponsiveConfigInterface,RESPONSIVE_DIRECTIVES} from 'responsive-directives-angular2';

/**
 * NG2 - RESPONSIVE FOR ANGULAR 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła, Janne Julkunen
 * @created_at May 23, 2016
 * @updated_at AUG 26, 2016 - by ManuCutillas
 * @version_0.3.3
 *
 * Dependencies:
 * @angular/core : "2.0.0-rc.4"
 * rxjs: "5.0.0-beta.10"
 *
 * @more_info https://kalypso.agency
 *            https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *            https://github.com/no-more
 *            https://github.com/sconix
 * 
 *
 * @description : Superset of RESPONSIVE DIRECTIVES for Angular 2
 *
 */

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
