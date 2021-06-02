/**
 * @name useragent-info.rx
 * @description Useragent info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable} from '@angular/core';
import { Inject } from '@angular/core';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

import { UserAgentInfo } from '../../@directives/useragent/useragent-info';

@Injectable()
export class UserAgentInfoRx extends UserAgentInfo {
    constructor( 
        protected readonly responsiveState: ResponsiveState,
        @Inject(PlatformService) protected readonly platformService: PlatformService
    ) {
        super(responsiveState, platformService);
    }
}
