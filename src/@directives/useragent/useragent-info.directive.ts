/**
 * @name useragent-info.directive
 * @description Useragent info directive in ngx-responsive
 *
 * @license MIT
 */
import { Output, EventEmitter, Directive, OnInit, OnDestroy, ChangeDetectorRef, Inject } from '@angular/core';

import { IUserAgent } from '../../@core/interfaces';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

import { UserAgentInfo } from '../../@directives/useragent/useragent-info';

@Directive({
    selector: 'user-agent-info'
})
export class UserAgentInfoDirective extends UserAgentInfo implements OnInit, OnDestroy {
    @Output()
    public readonly info: EventEmitter<IUserAgent> = new EventEmitter();

    constructor(
        protected readonly responsiveState: ResponsiveState,
        @Inject(PlatformService) protected readonly platformService: PlatformService,
        private readonly _cd: ChangeDetectorRef
    ) {
        super(responsiveState, platformService);
    }

    public ngOnInit(): void {
        this.connect();
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }

    protected emitUserAgent(userAgent: IUserAgent): void {
        this.info.next(userAgent);

        this._cd.markForCheck();
    }
}
