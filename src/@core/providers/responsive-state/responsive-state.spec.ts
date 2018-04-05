import { ResponsiveState } from './responsive-state';
import { ResponsiveConfig } from '../responsive-config';
import { IResponsiveConfig } from '../../interfaces';
// constants speca

describe('ResponsiveState', () => {

  beforeEach(() => {
    // create a new instance of the ResponsiveState
    let responsiveState: ResponsiveState;
    let responsiveConfig: ResponsiveConfig;
    const config: IResponsiveConfig = {
      breakPoints: {
        xs: { max: 600 },
        sm: { min: 601, max: 959 },
        md: { min: 960, max: 1279 },
        lg: { min: 1280, max: 1919 },
        xl: { min: 1920 }
      },
      debounceTime: 100
    };

    beforeEach(() => {
      responsiveConfig = new ResponsiveConfig(config);
      responsiveState = new ResponsiveState(responsiveConfig);
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
  });

});
