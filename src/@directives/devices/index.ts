/**
 * @name devices
 * @description Device module in ngx-responsive
 *
 * @license MIT
 */
import { Provider } from '@angular/core';
import {
  IsDesktopDirective,
  IsTabletDirective,
  IsMobileDirective,
  IsSmartTvDirective,
  ShowItDeviceDirective,
  HideItDeviceDirective,
  IsIphoneDirective,
  IsIpadDirective,
  IsAndroidMobileDirective,
  IsAndroidTabletDirective,
  IsWindowsPhoneDirective,
  ShowItStandardDirective,
  HideItStandardDirective,
  IsPortraitDirective,
  IsLandscapeDirective
} from './devices-directives';

import { DeviceInfoDirective } from './devices-info.directive';
import { DeviceStandardInfoDirective } from './devices-standard-info.directive';
import { OrientationInfoDirective } from './orientation-info.directive';
import { DeviceInfoRx } from './devices-info.rx';
import { DeviceStandardInfoRx } from './devices-standard-info.rx';
import { OrientationInfoRx } from './orientation-info.rx';

export const DEVICES_DIRECTIVES: Provider[] = [
  IsDesktopDirective,
  IsTabletDirective,
  IsMobileDirective,
  IsSmartTvDirective,
  ShowItDeviceDirective,
  HideItDeviceDirective,
  IsIphoneDirective,
  IsIpadDirective,
  IsAndroidMobileDirective,
  IsAndroidTabletDirective,
  IsWindowsPhoneDirective,
  ShowItStandardDirective,
  HideItStandardDirective,
  IsPortraitDirective,
  IsLandscapeDirective,
  DeviceInfoDirective,
  DeviceStandardInfoDirective,
  OrientationInfoDirective
];

export const DEVICES_INFO_RX: Provider[] = [
  DeviceInfoRx,
  DeviceStandardInfoRx,
  OrientationInfoRx
 ];

export * from './devices-info.rx';
export * from './devices-standard-info.rx';
export * from './orientation-info.rx';
export * from './devices-info.directive';
export * from './devices-standard-info.directive';
export * from './orientation-info.directive';
export * from './devices-directives';
