import { Provider } from '@angular/core';
import {
  ShowItSizes,
  HideItSizes
} from './custom-sizes-directives';

export const CUSTOMSIZES_DIRECTIVES: Provider[] = [
 ShowItSizes,
 HideItSizes
];
export * from './custom-sizes-directives';
