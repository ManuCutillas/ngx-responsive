
# Introduction
Special directives to show or hide items according to the size of the device screen in Angular 2

`responsive-directives-angular2` provides the following features:
 - Directives detecting states according to standard measures in bootstrap: lg / md / sm / xs
 - Directives that detect three states according to the type of device screens.
 - NEW: Multiple combinations of states bootstrap.
 - NEW: Custom sizes detector.
 - NEW: Show and hide options
 - NEW: Custom breaking points
 - Written for the latest release of Angular 2 in typescript.
 
# How to start
 
1. installing the package via npm 
 ```
npm i responsive-directives-angular2 --save
 ```

2. bootstrap the service
	* with default breaking points
	```
    import { ResponsiveState } from 'responsive-directives-angular2';
    ...
    bootstrap(App, [ResponsiveState]);
     ```

	* with custom breaking points
	```

    import {provide} from '@angular/core';
    import { ResponsiveState, ResponsiveConfig } from 'responsive-directives-angular2';
    ...
    bootstrap(App, [
    provide(ResponsiveConfig, {useFactory: () => new ResponsiveConfig({
        xs: {max: 600},
        sm: {min: 601, max: 700},
        md: {min: 701, max: 800},
        lg: {min: 801}
      })}),
      ResponsiveState]);
     ```

 
3. import the responsive-directives-angular2 in your Angular 2 component

   * With Bootstrap Screen sizes  Directives
 ```
import { LG,MD,SM,XS } from 'responsive-directives-angular2';
 ```
    * With multiple combinations screen sizes bootstrap and show / hide options
 ```
import { ShowItBootstrap,HideItBootstrap } from 'responsive-directives-angular2';
 ```
   * With Devices Screen sizes Directives
 ```
import { IsDesktop,IsMobile,IsTablet } from 'responsive-directives-angular2';
 ```
    * With custom sizes and show / hide options
 ```
import { ShowItSizes,HideItSizes } from 'responsive-directives-angular2';
 ```
     * All directives globally
  ```
import {provide, PLATFORM_DIRECTIVES} from '@angular/core';
import {ResponsiveState, ResponsiveConfig, DIRECTIVES as RESPONSIVE_DIRECTIVES} from 'responsive-directives-angular2';
 ...
 bootstrap(App, [
       ResponsiveState,
        {provide: PLATFORM_DIRECTIVES, multi: true, useValue: RESPONSIVE_DIRECTIVES}]);
  ```
 
4. Assign directives for use in a component

   * With Bootstrap Screen sizes
 ```
@Component({
  selector: 'my-component',
  template: '
    <p *lg>I'll show you if I'm a lg screen size.</p>
    <p *md>I'll show you if I'm a md screen size.</p>
    <p *sm>I'll show you if I'm a sm screen size.</p>
    <p *xs>I'll show you if I'm a xs screen size.</p>
  ',
  directives: [LG,MD,SM,XS]
})
 ```
    * With multiple combinations screen sizes bootstrap and show / hide options
 ```
@Component({
  selector: 'my-component',
  template: '
    <p *showItBootstrap="['md','xs']">I'll show you only in md and xs screen sizes.</p>
    <p *hideItBootstrap="['lg','sm']">I'll hide you only in lg and sm screen sizes.</p>
  ',
  directives: [ShowItBootstrap,HideItBootstrap]
})
 ```
   * With Devices Screen sizes
 ```
@Component({
  selector: 'my-component',
  template: '
    <p *isDesktop>I'll show you if I'm a desktop device.</p>
    <p *isTablet>I'll show you if I'm a tablet device.</p>
    <p *isMobile>I'll show you if I'm a mobile device.</p>
  ',
  directives: [IsDesktop,IsMobile,IsTablet ]
})
 ```
  * With custom sizes and show / hide options
 ```
@Component({
  selector: 'my-component',
  template: '
    <p *showItSizes="{min:955,max:1057}">I'll show you if I have a width between the min and max.</p>
    <p *hideItSizes="{min:360,max:768}">It is hidden if I have a width between the min and max.</p>
  ',
  directives: [ ShowItSizes,HideItSizes ]
})
 ```

# NEXT 
Will work in the following features:

- Detection device: browser type, operating system..etc
- Detect portrait and landscape device status

# Contributors
 * ManuCutillas 
 * Christophe HOARAU

# License

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
