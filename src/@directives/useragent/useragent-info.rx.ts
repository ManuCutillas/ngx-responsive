/**
 * @name useragent-info.rx
 * @description Useragent info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable} from '@angular/core';
import { ResponsiveState } from '../../@core';
import { UserAgentInfo } from './useragent-info';

@Injectable()
export class UserAgentInfoRx extends UserAgentInfo  {
    constructor( public _responsiveState: ResponsiveState) { super(_responsiveState); }
}
