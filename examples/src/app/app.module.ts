import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { ResponsiveModule, IResponsiveConfig } from 'ngx-responsive';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

const config: IResponsiveConfig = {
  breakPoints: {
    xs: { max: 600 },
    sm: { min: 601, max: 959 },
    md: { min: 960, max: 1279 },
    lg: { min: 1280, max: 1919 },
    xl: { min: 1920 }
  },
  debounceTime: 100
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ResponsiveModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
