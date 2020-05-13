import { ResponsiveWindowDirective } from './../../../@directives/responsive-window/responsive-window';
import { PlatformService } from './../platform-service/platform.service';
import { ResponsiveState } from './responsive-state';
import { ResponsiveConfig } from '../responsive-config';
import { IResponsiveConfig } from '../../interfaces';
// constants speca

describe('ResponsiveState', () => {
  let responsiveState: ResponsiveState;
  let responsiveConfig: ResponsiveConfig;
  const config: IResponsiveConfig = {
    breakPoints: {
      xs: { max: 600 },
      sm: { min: 601, max: 959 },
      md: { min: 960, max: 1279 },
      lg: { min: 1280, max: 1919 },
      xl: { min: 1920 },
    },
    debounceTime: 100,
  };
  beforeEach(() => {
    responsiveConfig = new ResponsiveConfig(config);
    const platform = new PlatformService('browser', null);
    responsiveState = new ResponsiveState(platform, responsiveConfig);
    responsiveState['isEnabledForPlatform'] = true;
  });

  beforeAll(() => {
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'));
    };
  });

  afterEach(() => {
    responsiveConfig = null;
    responsiveState = null;
  });

  it('getDevicePixelRatio', () => {
    const spy = spyOn(responsiveState, 'getDevicePixelRatio').and.returnValue(1);
    expect(responsiveState.getDevicePixelRatio()).toBe(1);
    expect(responsiveState.getDevicePixelRatio).toHaveBeenCalled();
  });

  it('forceRefresh', () => {
    responsiveState.forceRefresh();
    responsiveState['_forceRefresh$'].subscribe((res) => {
      expect(res).toBeNull();
    });
  });

  it('getOrientation', () => {
    const result = responsiveState.getOrientation();
  });

  it('sizeObserver', () => {
    window.resizeTo(2000, 2000);
    const result = responsiveState.sizeObserver();
    expect(result).toBe(2000);
  });

  it('sizeOperations --> xl', () => {
    const result = responsiveState.sizeOperations();
    expect(result).toBe('xl');
  });

  it('sizeOperations --> lg', () => {
    window.resizeTo(1280, 1280);
    const result = responsiveState.sizeOperations();
    expect(result).toBe('lg');
  });

  it('sizeOperations --> md', () => {
    window.resizeTo(1024, 1024);
    const result = responsiveState.sizeOperations();
    expect(result).toBe('md');
  });

  it('sizeOperations --> sm', () => {
    window.resizeTo(785, 785);
    const result = responsiveState.sizeOperations();
    expect(result).toBe('sm');
  });

  it('sizeOperations --> xs', () => {
    window.resizeTo(480, 480);
    const result = responsiveState.sizeOperations();
    expect(result).toBe('xs');
  });

  it('standardDevices', () => {
    const res = responsiveState.standardDevices();
    expect(res).toBeNull();
  });

  it('orientationDevice: desktop', () => {
    const spy = spyOn(responsiveState, 'isDesktop').and.returnValue(true);
    const result = responsiveState.orientationDevice();
    expect(responsiveState.isDesktop).toHaveBeenCalled();
    expect(result).toEqual('landscape');
  });

  it('orientationDevice: mobile landscape', () => {
    window.resizeTo(600, 480);
    const spy = spyOn(responsiveState, 'isMobile').and.returnValue(true);
    const result = responsiveState.orientationDevice();
    expect(responsiveState.isMobile).toHaveBeenCalled();
    expect(result).toEqual('landscape');
  });

  it('orientationDevice: mobile portrait', () => {
    window.resizeTo(480, 600);
    const spy = spyOn(responsiveState, 'isMobile').and.returnValue(true);
    const result = responsiveState.orientationDevice();
    expect(responsiveState.isMobile).toHaveBeenCalled();
    expect(result).toEqual('portrait');
  });

  it('gameDevices', () => {
    responsiveState.gameDevices();
  });

  it('deviceDetection: is mobile', () => {
    const spy = spyOn(responsiveState, 'isMobile').and.returnValue(true);
    const result = responsiveState.deviceDetection();
    expect(responsiveState.isMobile).toHaveBeenCalled();
    expect(result).toEqual('mobile');
  });

  it('deviceDetection: is tablet', () => {
    const spy = spyOn(responsiveState, 'isTablet').and.returnValue(true);
    const result = responsiveState.deviceDetection();
    expect(responsiveState.isTablet).toHaveBeenCalled();
    expect(result).toEqual('tablet');
  });

  it('deviceDetection: is smarttv', () => {
    const spy = spyOn(responsiveState, 'isSMART').and.returnValue(true);
    const result = responsiveState.deviceDetection();
    expect(responsiveState.isSMART).toHaveBeenCalled();
    expect(result).toEqual('smarttv');
  });

  it('deviceDetection: is desktop', () => {
    const spy = spyOn(responsiveState, 'isDesktop').and.returnValue(true);
    const result = responsiveState.deviceDetection();
    expect(responsiveState.isDesktop).toHaveBeenCalled();
    expect(result).toEqual('desktop');
  });

  it('standardDevices', () => {
    const result = responsiveState.standardDevices();
  });

  it('smartTv', () => {
    console.log('user agent: ');
    responsiveState.smartTv();
  });

  it('desktop', () => {
    responsiveState.desktop();
  });
  it('tablet', () => {
    responsiveState.tablet();
  });

  it('mobile', () => {
    responsiveState.mobile();
  });
});
