/**
 * @name responsive-size-info
 * @description Responsive Size Info in ngx-responsive
 *
 * @license MIT
 */
import { Provider } from '@angular/core';
import { ResponsiveSizeInfoDirective } from './responsive-size-info.directive';
import { ResponsiveSizeInfoRx } from './responsive-size-info.rx';
export const RESPONSIVE_SIZE_INFO_DIRECTIVE: Provider[] = [ ResponsiveSizeInfoDirective ];
export const RESPONSIVE_SIZE_INFO_RX: Provider[] = [ ResponsiveSizeInfoRx ];

export * from './responsive-size-info';
export * from './responsive-size-info.directive';
export * from './responsive-size-info.rx';

