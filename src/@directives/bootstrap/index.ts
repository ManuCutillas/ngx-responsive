/**
 * @name bootstrap
 * @description Bootstrap module in ngx-responsive
 *
 * @license MIT
 */
import { Provider } from '@angular/core';
import {
    HideItBootstrapDirective,
    LgDirective,
    LgUpDirective,
    MdDirective,
    MdUpDirective,
    ShowItBootstrapDirective,
    SmDirective,
    SmUpDirective,
    XlDirective,
    XsDirective,
} from './bootstrap-directives';

export * from './bootstrap-directives';

export const BOOTSTRAP_DIRECTIVES: Provider[] = [
    XlDirective,
    LgDirective,
    LgUpDirective,
    MdDirective,
    MdUpDirective,
    SmDirective,
    SmUpDirective,
    XsDirective,
    ShowItBootstrapDirective,
    HideItBootstrapDirective,
];
