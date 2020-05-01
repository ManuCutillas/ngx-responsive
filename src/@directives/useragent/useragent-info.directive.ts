/**
 * @name useragent-info.directive
 * @description Useragent info directive in ngx-responsive
 *
 * @license MIT
 */
import { Output, EventEmitter, Directive, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { UserAgentInfo } from './useragent-info';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Directive(
{
    selector: 'user-agent-info'
})
export class UserAgentInfoDirective extends UserAgentInfo implements OnInit, OnDestroy {
    @Output() info: EventEmitter<any> = new EventEmitter();
    constructor(
        public _responsiveState: ResponsiveState,
        public cd: ChangeDetectorRef,
        platformService: PlatformService
    ) { super(_responsiveState, platformService); }
    public ngOnInit(): void {
        this.connect();
    }
    public ngOnDestroy(): void {
        this.disconnect();
    }
    protected _emitUserAgent ( value: any ): void {
        this.info.emit( value );
        this.cd.markForCheck();
    }
}
