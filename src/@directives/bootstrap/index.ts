/**
 * @name bootstrap
 * @description Bootstrap module in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
import { Provider } from '@angular/core';
import {
  XlDirective,
  LgDirective,
  MdDirective,
  SmDirective,
  XsDirective,
  ShowItBootstrapDirective,
  HideItBootstrapDirective
} from './bootstrap-directives';

export * from './bootstrap-directives';

export const BOOTSTRAP_DIRECTIVES: Provider[] = [
  XlDirective,
  LgDirective,
  MdDirective,
  SmDirective,
  XsDirective,
  ShowItBootstrapDirective,
  HideItBootstrapDirective
];
