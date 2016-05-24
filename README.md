# Introduction
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Special directives to show or hide items according to the size of the device screen in Angular 2

`devices-detect-angular2` provides the following features:
 - Directives detecting states according to standard measures in bootstrap: lg / md / sm / xs
 - Directives that detect three states according to the type of device screens.
 - Written for the latest release of Angular 2 in typescript.
 
 # How to start
 
 ```bash

# 1. installing the package via npm 
npm i devices-detect-angular2 --save

# 2. import the angular2-responsive-directives in your Angular 2 component

# With Bootstrap Screen sizes  Directives
import {LG,MD,SM,XS } from 'devices-detect-angular2/devicesdetect-directives';

# With Devices Screen sizes Directives
import {IsDesktop,IsMobile,IsTablet } from 'devices-detect-angular2/devicesdetect-directives';

# 3. Assign directives for use in a component

# With Bootstrap Screen sizes
@Component({
  selector: 'my-component',
  template: `
    <p *lg>I'll show you if I'm a lg screen size.</p>
    <p *md>I'll show you if I'm a md screen size.</p>
    <p *sm>I'll show you if I'm a sm screen size.</p>
    <p *xs>I'll show you if I'm a xs screen size.</p>
  `,
  directives: [LG,MD,SM,XS]
})

# With Devices Screen sizes
@Component({
  selector: 'my-component',
  template: `
    <p *isDesktop>I'll show you if I'm a desktop device.</p>
    <p *isTablet>I'll show you if I'm a tablet device.</p>
    <p *isMobile>I'll show you if I'm a mobile device.</p>
  `,
  directives: [IsDesktop,IsMobile,IsTablet ]
})

```



# NEXT 
Will work in the following features:

- Detection device: browser type, operating system..etc
- Detect portrait and landscape device status

# License

MIT 