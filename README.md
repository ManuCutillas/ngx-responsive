
# Introduction
Superset of **RESPONSIVE DIRECTIVES** to show or hide items according to the size of the device screen and another features in Angular 2

**BREAKING CHANGE** in bootstrap process

`RESPONSIVE_DIRECTIVES` provides the following features:
 - Directives detecting states according to standard measures in BOOTSTRAP: xs / sm / md / lg / xl
 - Directives that detect four states according to the real type of device: mobile / tablet / desktop / smartTv
 - Multiple combinations of states bootstrap / devices / standard devices / browsers / IE
 - Custom sizes detector.
 - Show and hide options.
 - Custom breaking points.
 - Debounce checking interval (default 100ms).
 - Locally or Global use in your proyect.
 - Browsers Detect: Chrome / Safari / Firefox / IE / Opera
 - Internet Explorer Versions Detect : IE 9 / IE 10 / IE 11 / IE +12
 - New device: SmartTV.
 - New standard devices: iPhone, iPad, Android Mobile, Android Tablet, Windows Phone.
 - Device orientation detect: portrait, landscape.
 - Pixel ratio detect : 1x / Retina / 4k.
 - Directives: DeviceInfo, OrientationInfo,ResponsiveSizeInfo,PixelRatioInfo.
 - **NEW:** css classes to show/hide according to bootstrap sizes
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

    * with custom Configuration
      
    ```
    import { ResponsiveState, ResponsiveConfig, ResponsiveConfigInterface } from 'responsive-directives-angular2';
    ...
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
    ...
    bootstrap(App,
    [
        {
            provide: ResponsiveConfig,
            useFactory: () => new ResponsiveConfig(config)
        },
        ResponsiveState
    ]);
     ```

 
3.DIRECTIVES:

   1. import Directives for **Locally** use in your Angular 2 proyect
      
      * With Bootstrap screen sizes.
      
       ```
       import { LG,MD,SM,XS,ResponsiveSizeInfo } from 'responsive-directives-angular2';
       ```
      
      * With multiple combinations bootstrap screen sizes and show / hide options.
      
      ```
      import { ShowItBootstrap,HideItBootstrap } from 'responsive-directives-angular2';
      ```
      
      * With Devices real detect
      
      ```
      import { IsDesktop,IsMobile,IsTablet,IsSmartTv,DeviceInfo} from 'responsive-directives-angular2';
      ```
      
      * With multiple devices detect combinations: show / hide options.
      
      ```
      import { ShowItDevice,HideItDevice } from 'responsive-directives-angular2';
      ```
      
      * With Standard Devices detect
       
       ```
      import { IsIphone, IsIpad, IsAndroidMobile,IsAndroidTablet,IsWindowsPhone } from 'responsive-directives-angular2';
      ```
      
      * With multiple Standard Devices combinations: show / hide options.
      
      ```
      import { ShowItStandard,HideItStandard } from 'responsive-directives-angular2';
      ```
      
      * With orientation detect : portrait / landscape.
      
      ```
      import { IsPortrait, IsLandscape,OrientationInfo } from 'responsive-directives-angular2';
      ```
      
      * With custom sizes and show / hide options.
      
      ```
      import { ShowItSizes,HideItSizes } from 'responsive-directives-angular2';
      ```
      * With browser detection.
      
      ```
      import { IsChrome, IsFirefox,IsSafari,IsOpera,IsIE } from 'responsive-directives-angular2';
      ```
      
      * With multiple browser combinations: show / hide options.
      
      ```
      import { ShowItBrowser, HideItBrowser } from 'responsive-directives-angular2';
      ```
      
      * With Internet Explorer version detect.
      
      ```
      import { IsIE9, IsIE10, IsIE11, IsIE12 } from 'responsive-directives-angular2';
      ```
      
      * With multiple IE version combinations: show / hide options.
      
      ```
      import { ShowIEVersion, HideIEVersion } from 'responsive-directives-angular2';
      ```
      * With Pixel Ratio detect.
      
      ```
      import { Is1xPixel, IsRetina, Is4k, PixelRatioInfo } from 'responsive-directives-angular2';
      ```
      
   2. Add all Directives to **Globally** use by a service
      
      - In your init App Class add All **RESPONSIVE_DIRECTIVES** to the global directives core of Angular 2
      
      ```
      import {provide, PLATFORM_DIRECTIVES} from '@angular/core';
      import {ResponsiveState, ResponsiveConfig, RESPONSIVE_DIRECTIVES} from 'responsive-directives-angular2';
      ...
      bootstrap(App, [
             ResponsiveState,
             provide(PLATFORM_DIRECTIVES, { useValue: [RESPONSIVE_DIRECTIVES], multi: true})
             ]);
      ```
      
      * In your component to import the RESPONSIVE_DIRECTIVES only need import: 
     
      ```
      import {CORE_DIRECTIVES} from '@angular/common';
      ```
      
      And assign the CORE_DIRECTIVES:
      
      ```
      @Component({
         selector: 'my-component',
         template: '
              <p *showItStandard="['iphone','ipad']">I'll show you if I'm a iPhone or ipad device.</p>
              <p *isIphone>I'll show you if I'm a iPhone device.</p>
              <p *isChrome>I'll show you if I'm a chrome browser.</p>
              <p *xl>I'll show you if I'm a xl screen size.</p>
              <p *lg>I'll show you if I'm a lg screen size.</p>
              <p *md>I'll show you if I'm a md screen size.</p>
              <p *sm>I'll show you if I'm a sm screen size.</p>
              <p *xs>I'll show you if I'm a xs screen size.</p>
         ',
         directives: [CORE_DIRECTIVES]
       })
      ```
 
4. If you import the RESPONSIVE_DIRECTIVES **Locally** in your Angular 2 component 

   * With Bootstrap Screen sizes
   
   ```
   @Component({
      selector: 'my-component',
      template: '
        <p *xl>I'll show you if I'm a xl screen size.</p>
        <p *lg>I'll show you if I'm a lg screen size.</p>
        <p *md>I'll show you if I'm a md screen size.</p>
        <p *sm>I'll show you if I'm a sm screen size.</p>
        <p *xs>I'll show you if I'm a xs screen size.</p>
      ',
      directives: [LG,MD,SM,XS]
   })
   ```
   
   * With multiple combinations of bootstrap screen sizes and show / hide options
     - Strings Multiple combinations = "['xs','sm','md','lg','xl']"


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
        <p *isSmartTv>I'll show you if I'm a smartTv device.</p>
        <p *isDesktop>I'll show you if I'm a desktop device.</p>
        <p *isTablet>I'll show you if I'm a tablet device.</p>
        <p *isMobile>I'll show you if I'm a mobile device.</p>
        ',
        directives: [IsSmartTv,IsDesktop,IsMobile,IsTablet ]
     })
     ```
     
    * With multiple devices detect combinations: show / hide options.
      - Strings Multiple combinations = "['mobile','tablet','smarttv','desktop']"
      ```
      @Component({
        selector: 'my-component',
        template: '
        <p *showItDevice="['mobile','tablet']">I'll show you if I'm a tablet or a mobile device.</p>
        <p *hideItDevice="['mobile','tablet','desktop']">I'll hide you if I'm a desktop / tablet or mobile device.</p>
        ',
        directives: [ HideItDevice, ShowItDevice ]
      })
      ```
      
   * With Standard Devices detect
    
      ```
       @Component({
        selector: 'my-component',
        template: '
        <p *isIphone>I'll show you if I'm a iPhone device.</p>
        <p *isIpad>I'll show you if I'm a iPad device.</p>
        <p *isAndroidMobile>I'll show you if I'm a android mobile device.</p>
        <p *isAndroidTablet>I'll show you if I'm a android tablet device.</p>
        <p *isWindowsPhone>I'll show you if I'm a windows phone mobile device.</p>
        ',
        directives: [IsIphone, IsIpad, IsAndroidMobile,IsAndroidTablet,IsWindowsPhone ]
      })
      ```
     
    * With multiple devices detect combinations: show / hide options.
       - Strings Multiple combinations = "['iphone','ipad','android mobile','android tablet','windows phone']"
      
        ```
       @Component({
        selector: 'my-component',
        template: '
        <p *showItStandard="['android mobile','windows phone']">I'll show you if I'm a android mobile or a windows phone device.</p>
        <p *hideItStandard="['iphone','ipad']">I'll hide you if I'm a iPad or a iPhone device.</p>
        ',
        directives: [ShowItStandard, HideItStandard]
        })
        ```
      
   * With orientation device
      ```
       @Component({
        selector: 'my-component',
        template: '
        <p *isPortrait>I'll show you if I'm a portrait state.</p>
        <p *isLandscape>I'll show you if I'm a landscape state.</p>
        ',
        directives: [IsPortrait,IsLandscape ]
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
     
      * With browser detection.
      
       ```
       @Component({
        selector: 'my-component',
        template: '
            <p *isChrome>I'll show you if I'm a Chrome Browser.</p>
            <p *isFirefox>I'll show you if I'm a Firefox Browser.</p>
            <p *isSafari>I'll show you if I'm a Safari Browser.</p>
            <p *isOpera>I'll show you if I'm a Opera Browser.</p>
            <p *isIE>I'll show you if I'm a Internet Explorer Browser.</p>
        ',
        directives: [IsChrome, IsFirefox,IsSafari,IsOpera,IsIE ]
      })
      ```
    * With multiple browsers detect combinations: show / hide options.
       - Strings Multiple combinations = "['chrome','firefox','ie','safari', 'opera']"
        ```
        @Component({
           selector: 'my-component',
           template: '
             <p *showItBrowser="['ie','opera']">I'll show you if I'm a IE or Opera Browser.</p>
             <p *hideItBrowser="['chrome','firefox','safari']">I'll hide you if I'm a Chrome, Firefox or Safari Browser.</p>
            ',
            directives: [ ShowItBrowser,HideItBrowser ]
        })
        ```
    * With Internet Explorer Version detection.
      
       ```
       @Component({
        selector: 'my-component',
        template: '
            <p *isIE9>I'll show you if I'm a Internet Explorer 9.</p>
            <p *isIE10>I'll show you if I'm a Internet Explorer 10.</p>
            <p *isIE11>I'll show you if I'm a Internet Explorer 11.</p>
            <p *isIE12>I'll show you if I'm a Internet Explorer 12.</p>
        ',
        directives: [IsIE9,IsIE10,IsIE11,IsIE12 ]
      })
      ```
      
      * With multiple Internet Explorer version detect: show / hide options.
       - Strings Multiple combinations = "['ie 9','ie 10','ie 11','ie +12']"
        ```
        @Component({
           selector: 'my-component',
           template: '
             <p *showIEVersion="['ie 11','ie +12']">I'll show you if I'm a IE 11 browser or IE 12</p>
             <p *hideIEVersion="['ie 9','ie 10']">I'll hide you if I'm IE 9 browser or IE 10.</p>
            ',
            directives: [ ShowIEVersion,HideIEVersion ]
        })
        ```

5. Use css classes
In some case you may prefer to use css classes to achieve show/hide of an element.

    .hide.show-xx will **hide** element if xx **is not matched**, xx takes values in xs,sm,md,lg,xl

    .hide-xx will **hide** element if xx **is matched**, xx takes values in xs,sm,md,lg,xl

    ```
    <resonsiveCss></resonsiveCss>
    <div class="hide show-xs">show when xs</div>
    <div class="hide show-sm">show when sm</div>
    <div class="hide show-md">show when md</div>
    <div class="hide show-lg">show when lg</div>
    <div class="hide-xs">hide when xs</div>
    <div class="hide-sm">hide when sm</div>
    <div class="hide-md">hide when md</div>
    <div class="hide-lg">hide when lg</div>
    <div class="hide-xl">hide when xl</div>
    ```
      
# NEXT STEPS 
- Refactor to more simple code and easy to maintain. Less specific directives.
- Time Events Show/Hide Elements
- Desktop OS
- Work in demo page

# Contributors
 * ManuCutillas 
 * Christophe HOARAU
 * Kamil Breguła

# License

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


