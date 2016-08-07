import { OnInit } from '@angular/core';
export declare class AppComponent implements OnInit {
    private xl;
    private lg;
    private md;
    private sm;
    private xs;
    private smarttv;
    private desktop;
    private tablet;
    private mobile;
    private portrait;
    private landscape;
    private pixel4k;
    private retina;
    private pixel1x;
    constructor();
    ngOnInit(): void;
    listenchanges(value: any): void;
    thisdevice(value: string): void;
    thispixelratio(value: string): void;
    thisorientation(value: string): void;
    thisUserAgent: (value: any) => void;
    mystates(value: string): void;
}
