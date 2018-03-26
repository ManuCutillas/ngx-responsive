
import { Provider } from '@angular/core';
import {
  XlDirective,
  LgDirective,
  MdDirective,
  SmDirective,
  XsDirective,
  ShowItBootstrap,
  HideItBootstrap
} from './bootstrap-directives';

export * from './bootstrap-directives';

export const BOOTSTRAP_DIRECTIVES: Provider[] = [
  XlDirective,
  LgDirective,
  MdDirective,
  SmDirective,
  XsDirective,
  ShowItBootstrap,
  HideItBootstrap
];
