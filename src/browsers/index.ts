import { Provider } from '@angular/core';
import {
  IsChrome,
  IsFirefox,
  IsSafari,
  IsOpera,
  IsIE,
  IsIE9,
  IsIE10,
  IsIE11,
  IsIE12,
  ShowItBrowser,
  HideItBrowser,
  ShowIEVersion,
  HideIEVersion,
  IeInfo,
  BrowserInfo
} from './browsers-directives';

export const BROWSER_DIRECTIVES: Provider[] = [
  IsChrome,
  IsFirefox,
  IsSafari,
  IsOpera,
  IsIE,
  IsIE9,
  IsIE10,
  IsIE11,
  IsIE12,
  ShowItBrowser,
  HideItBrowser,
  ShowIEVersion,
  HideIEVersion,
  IeInfo,
  BrowserInfo
];
export * from './browsers-directives';
