/**
 * @name useragent
 * @description Useragent in ngx-responsive
 *
 * @license MIT
 */
import { Provider } from '@angular/core';
import { UserAgentInfoDirective } from './useragent-info.directive';
import { UserAgentInfoRx } from './useragent-info.rx';
export const USERAGENT_INFO_DIRECTIVE: Provider[] = [ UserAgentInfoDirective ];
export const USERAGENT_INFO_RX: Provider[] = [ UserAgentInfoRx ];

export * from './useragent-info';
export * from './useragent-info.directive';
export * from './useragent-info.rx';
