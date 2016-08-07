import {Component, OnInit,ViewEncapsulation} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'components/app.component.html',
  styleUrls: ['components/app.component.css'],
  directives: [CORE_DIRECTIVES]
})

export class AppComponent implements OnInit {
  private xl: boolean;
  private lg: boolean;
  private md: boolean;
  private sm: boolean;
  private xs: boolean;
  private smarttv: boolean;
  private desktop: boolean;
  private tablet: boolean;
  private mobile: boolean;
  private portrait: boolean;
  private landscape: boolean;
  private pixel4k: boolean;
  private retina: boolean;
  private pixel1x: boolean;
  constructor() { }
  ngOnInit() { }

 listenchanges(value){
   console.info(value);
 }
  thisdevice(value: string) {
    switch (value) {
      case "smarttv":
        console.info('device ==>', value);
        this.smarttv = true;
        break;
      case "desktop":
        console.info('device ==>', value);
        this.desktop = true;
        break;
      case "tablet":
        console.info('device ==>', value);
        this.tablet = true;
        break;
      case "mobile":
        console.info('device ==>', value);
        this.mobile = true;
        break;
      default:
        this.smarttv, this.desktop, this.tablet, this.mobile = false;
    }

  }

  thispixelratio(value: string) {
    switch (value) {
      case "4k":
        console.info('pixel ratio ==>', value);
        this.pixel4k = true;
        break;
      case "retina":
        console.info('pixel ratio ==>', value);
        this.retina = true;
        break;
      case "1x":
        console.info('pixel ratio ==>', value);
        this.pixel1x = true;
        break;
      default:
        this.pixel4k, this.retina, this.pixel1x = false;
    }
  }


  thisorientation(value: string) {
    switch (value) {
      case "portrait":
        console.info('orientation ==>', value);
        this.portrait = true;
        break;
      case "landscape":
        console.info('orientation ==>', value);
        this.landscape = true;
        break;
        
      default:
        this.portrait, this.landscape = false;
    }
  }

  public thisUserAgent = (value:any) =>{
    console.info('useragent ==>', value);
  }

  mystates(value: string) {
    switch (value) {
      case "xl":
        console.info('bootstrap_state ==>', value);
        this.xl = true;
        this.lg, this.md, this.sm, this.xs = false;
        break;
      case "lg":
        console.info('bootstrap_state ==>', value);
        this.xl, this.md, this.sm, this.xs = false;
        this.lg = true;
        break;
      case "md":
        console.info('bootstrap_state ==>', value);
        this.xl, this.lg, this.sm, this.xs = false;
        this.md = true;
        break;
      case "sm":
        console.info('bootstrap_state ==>', value);
        this.xl, this.lg, this.md, this.xs = false;
        this.sm = true;
        break;
      case "xs":
        console.info('bootstrap_state ==>', value);
        this.xl, this.lg, this.md, this.sm = false;
        this.xs = true;
        break;
      default:
        this.xs, this.lg, this.md, this.sm, this.xs = false;
    }
  }
}