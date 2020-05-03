

import { Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { ResponsiveConfig } from '../responsive-config/responsive-config';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class PlatformService {

  isServer: boolean;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private readonly _platformId,
    @Inject(ResponsiveConfig) private responsiveConfig: ResponsiveConfig
  ) {
    this.isServer = isPlatformServer(_platformId);
    this.isBrowser = isPlatformBrowser(_platformId);
  }

  public isEnabledForPlatform() {
    return this.isBrowser || this.responsiveConfig.config.renderOnServer;
  }
}