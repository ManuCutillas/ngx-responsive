/**
 * @name custom-sizes
 * @description Custom sizes in ngx-responsive
 *
 * @license MIT
 */
import { Provider } from '@angular/core';
import {
  ShowItSizesDirective,
  HideItSizesDirective
} from './custom-sizes-directives';

export const CUSTOMSIZES_DIRECTIVES: Provider[] = [
 ShowItSizesDirective,
 HideItSizesDirective
];
export * from './custom-sizes-directives';
