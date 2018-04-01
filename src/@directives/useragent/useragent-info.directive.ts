import { Output, EventEmitter, Directive, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResponsiveState } from '../../@core';
import { UserAgentInfo } from './useragent-info';

@Directive(
{
    selector: 'user-agent-info'
})
export class UserAgentInfoDirective extends UserAgentInfo implements OnInit, OnDestroy {
    @Output() info: EventEmitter<any> = new EventEmitter();
    constructor(
        public _responsiveState: ResponsiveState,
        public cd: ChangeDetectorRef) { super(_responsiveState); }
    public ngOnInit(): void {
        this.connect();
    }
    public ngOnDestroy(): void {
        this.disconnect();
    }
    protected emitUserAgent ( value: any ): void {
        this.info.emit( value );
        this.cd.markForCheck();
    }
}
