/**
 * @name pixelratio
 * @description pixelratio in ngx-responsive
 *
 * @license MIT
 */
import { Provider } from '@angular/core';
import {
  Is1xPixelDirective,
  IsRetinaDirective,
  Is4kDirective,
  PixelRatioInfoDirective
} from './pixelratio-directives';

export const PIXELRATIO_DIRECTIVES: Provider[] = [
  Is1xPixelDirective,
  IsRetinaDirective,
  Is4kDirective,
  PixelRatioInfoDirective
];

export * from './pixelratio-directives';
