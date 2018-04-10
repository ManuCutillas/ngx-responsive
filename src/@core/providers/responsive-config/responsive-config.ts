/**
 * @name responsive-config
 * @description Core responsive-config provider in ngx-responsive
 *
 * @license MIT
 */
import { Injectable, Inject, Optional } from '@angular/core';
import { IResponsiveConfig } from '../../interfaces/responsive-config.interfaces';

@Injectable()
export class ResponsiveConfig {
    public config: IResponsiveConfig;
    constructor(@Inject('config') private _config?: IResponsiveConfig) {
       this.config = this._config;
    }
}
