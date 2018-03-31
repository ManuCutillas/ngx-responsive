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
  IsLandscapeDirective,
  DeviceInfoDirective,
  DeviceStandardInfoDirective,
  OrientationInfoDirective

} from './devices-directives';

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

export * from './devices-directives';
