import { Provider } from '@angular/core';
import {
  IsChromeDirective,
  IsFirefoxDirective,
  IsSafariDirective,
  IsOperaDirective,
  IsIEDirective,
  IsIE9Directive,
  IsIE10Directive,
  IsIE11Directive,
  IsIE12Directive,
  ShowItBrowserDirective,
  HideItBrowserDirective,
  ShowIEVersionDirective,
  HideIEVersionDirective,
} from './browsers-directives';
import { BrowserInfoRx } from './browser-info.rx';
import { BrowserInfoDirective } from './browser-info.directive';
import { IeInfoRx } from 'src/browsers/ie-info.rx';
import { IeInfoDirective } from 'src/browsers/ie-info.directive';

export const BROWSER_DIRECTIVES: Provider[] = [
  IsChromeDirective,
  IsFirefoxDirective,
  IsSafariDirective,
  IsOperaDirective,
  IsIEDirective,
  IsIE9Directive,
  IsIE10Directive,
  IsIE11Directive,
  IsIE12Directive,
  ShowItBrowserDirective,
  HideItBrowserDirective,
  ShowIEVersionDirective,
  HideIEVersionDirective,
  BrowserInfoDirective,
  IeInfoDirective
];

export const BROWSER_INFO_RX: Provider[] = [BrowserInfoRx];
export const IE_INFO_RX: Provider[] = [IeInfoRx];
export * from './browsers-directives';
export * from './browser-info.rx';
export * from './browser-info.directive';
export * from 'src/browsers/ie-info.rx';
export * from 'src/browsers/ie-info.directive';
