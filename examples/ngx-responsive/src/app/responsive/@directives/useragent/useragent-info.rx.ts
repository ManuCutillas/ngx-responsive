import { Injectable} from '@angular/core';
import { ResponsiveState } from '../../@core';
import { UserAgentInfo } from './useragent-info';

@Injectable()
export class UserAgentInfoRx extends UserAgentInfo  {
    constructor( public _responsiveState: ResponsiveState) { super(_responsiveState); }
}
