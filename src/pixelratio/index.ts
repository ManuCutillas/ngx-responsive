import { Provider } from '@angular/core';
import {
  Is1xPixel,
  IsRetina,
  Is4k,
  PixelRatioInfo
} from './pixelratio-directives';

export {
  Is1xPixel,
  IsRetina,
  Is4k,
  PixelRatioInfo
 } from './pixelratio-directives';

export const PIXELRATIO_DIRECTIVES: Provider[] = [
  Is1xPixel,
  IsRetina,
  Is4k,
  PixelRatioInfo
];
