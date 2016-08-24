import { NgModule, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface} from 'ng2-responsive';
//REMOVE
//import { ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface } from './responsive';

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


@NgModule({
  imports: [
    BrowserModule,
    ResponsiveModule
  ],
  declarations: [
    AppComponent
  ],
  providers:[
    {provide: ResponsiveConfig, useFactory: () => new ResponsiveConfig(config) }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
