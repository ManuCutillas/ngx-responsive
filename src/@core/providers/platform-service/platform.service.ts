

import { Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { ResponsiveConfig } from '../responsive-config/responsive-config';

@Injectable()
export class PlatformService {
    public readonly isServer: boolean;
    public readonly isBrowser: boolean;

    constructor(
        @Inject(PLATFORM_ID) private readonly _platformId,
        @Inject(ResponsiveConfig) private readonly _responsiveConfig: ResponsiveConfig
    ) {
        this.isServer = isPlatformServer(this._platformId);
        this.isBrowser = isPlatformBrowser(this._platformId);
    }

    public isEnabledForPlatform() {
        return this.isBrowser || this._responsiveConfig.config.renderOnServer;
    }
}
