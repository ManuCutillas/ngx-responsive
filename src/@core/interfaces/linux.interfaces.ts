/**
 * @name linux.interfaces
 * @description Core linux interfaces in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */

import {
    TDebian, TKnoppix, TMint, TUbuntu, TKubuntu, TXubuntu, TLubuntu,
    TFedora, TRedHat, TMandriva, TGentoo, TSabayon, TSlackware, TSuse,
    TCentOS, TBacktrack, TGenericLinux
} from '../types';

/**
 * @interface ILinuxOS
 * @export ILinuxOS
 */
export interface ILinuxOS {
    DEBIAN: TDebian;
    KNOPPIX: TKnoppix;
    MINT: TMint;
    UBUNTU: TUbuntu;
    KUBUNTU: TKubuntu;
    XUBUNTU: TXubuntu;
    LUBUNTU: TLubuntu;
    FEDORA: TFedora;
    RED_HAT: TRedHat;
    MANDRIVA: TMandriva;
    GENTOO: TGentoo;
    SABAYON: TSabayon;
    SLACKWARE: TSlackware;
    SUSE: TSuse;
    CENT_OS: TCentOS;
    BACKTRACK: TBacktrack;
    GENERIC_LINUX: TGenericLinux;
}