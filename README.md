
# Introduction
Superset of **RESPONSIVE DIRECTIVES** to show or hide items according to the size of the device screen and another features in Angular 2

**BREAKING CHANGE** in bootstrap process

`RESPONSIVE_DIRECTIVES` provides the following features:
 - Directives detecting states according to standard measures in BOOTSTRAP: xl / lg / md / sm / xs
 - Directives that detect three states according to the type of device screens.
 - **NEW:** Multiple combinations of states bootstrap.
 - **NEW:** Custom sizes detector.
 - **NEW:** Show and hide options.
 - **NEW:** Custom breaking points.
 - **NEW:** Debounce checking interval (default 100ms).
 - **NEW:** Locally or Global use in your proyect.
 - **NEW:** New XL size (default: 1600px)
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

 
3.Import Directives:

   1. import the Directives **Locally** in your Angular 2 component
      
      * With Bootstrap screen sizes.
      
       ```
       import { LG,MD,SM,XS } from 'responsive-directives-angular2';
       ```
      
      * With multiple combinations bootstrap screen sizes and show / hide options.
      
      ```
      import { ShowItBootstrap,HideItBootstrap } from 'responsive-directives-angular2';
      ```
      
      * With Devices screen sizes.
      
      ```
      import { IsDesktop,IsMobile,IsTablet } from 'responsive-directives-angular2';
      ```
      
      * With custom sizes and show / hide options.
      
      ```
      import { ShowItSizes,HideItSizes } from 'responsive-directives-angular2';
      ```
      
   2. Add Directives to **Globally** Angular 2 Directives
      
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

# NEXT STEPS 
- Detection device: browser type, operating system..etc
- Detect portrait and landscape device status
- Time Events Show/Hide Elements

# Contributors

 * ManuCutillas 
 * Christophe HOARAU

# License

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
