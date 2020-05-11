/**
 * @name reg-expressions.constants
 * @description Core reg-expressions.constants in ngx-responsive
 *
 * @license MIT
 */

import { LINUX_OS } from './linux.constants';
import { WINDOWS_OS } from './windows.constants';
import { MOBILE } from './mobile.constants';
import { TABLET } from './tablet.constants';
import { OS_SYSTEMS } from './os-systems.constants';
import { SMART_TV } from './smart-tv.constants';
import { GAME_DEVICES } from './game-devices.constants';
import { BOTS } from './generic-bots.constants';
import { BROWSER_NAMES } from './browser-names.constants';

/* export const GLOBAL_INPUTS = {
    BOOTSTRAP: ['xs', 'sm', 'md', 'lg', 'xl'],
    DEVICES: ['mobile', 'tablet', 'smarttv', 'desktop'],
    STANDARD: ['iphone', 'ipad', 'android mobile', 'android tablet', 'windows phone'],
    ORIENTATION: ['portrait', 'landscape'],
    BROWSERS: ['chrome', 'firefox', 'ie', 'safari', 'opera'],
    PIXEL_RATIO: ['1x', 'retina', '4k'],
    IE_VERSIONS: ['ie 9', 'ie 10', 'ie 11', 'ie +12']
}; */

export const REG_WEARABLES = {
    IWATCH: ''
};

export const REG_MOBILES = {
    ANDROID: {
        REG: /(android);?[\s\/]+([\d.]+)?/,
        VALUE: MOBILE.ANDROID
    },
    IPHONE: {
        REG: /(iphone\sos)\s([\d_]+)/,
        VALUE: MOBILE.IPHONE
    },
    WINDOWS_PHONE: {
        REG: /windows phone ([\d.]+)/,
        VALUE: MOBILE.WINDOWS_PHONE
    },
    BLACKBERRY: {
        REG: /(blackBerry).*version\/([\d.]+)/,
        VALUE: MOBILE.BLACKBERRY
    },
    BB10: {
        REG: /(bb10).*version\/([\d.]+)/,
        VALUE: MOBILE.BLACKBERRY
    },
    WEB_OS: {
        REG: /(webos|hpwos)[\s\/]([\d.]+)/,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    IPOD: {
        REG: /(ipod)(.*os\s([\d_]+))?/,
        VALUE: MOBILE.IPHONE
    },
    FIREFOX_OS: {
        REG: /\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    MOBI: {
        REG: /[^-]mobi/i,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    GENERIC_REG_1: {
        REG: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    GENERIC_REG_2: {
        REG: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        VALUE: MOBILE.GENERIC_MOBILE
    }
};

export const REG_TABLETS = {
    IPAD: {
        REG: /(ipad).*os\s([\d_]+)/,
        VALUE: TABLET.IPAD
    },
    KINDLE: {
        REG: /kindle|silk|kfapw|kfarwi|kfaswi|kffowi|kfjw|kfmewi|kfot|kfsaw|kfsowi|kftbw|kfthw|kftt|wffowi/i,
        VALUE: TABLET.KINDLE
    },
    TABLET: {
        REG: /tablet/i,
        VALUE: TABLET.GENERIC_TABLET
    },
    PLAYBOOK: {
        REG: /rim\stablet|playbook/i,
        VALUE: TABLET.GENERIC_TABLET
    },
};

export const REG_SMARTS_TV = {
    CHROMECAST: {
        REG:  /crkey/i,
        VALUE: SMART_TV.CHROMECAST
    },
    APPLE_TV: {
        REG:  /appletv/i,
        VALUE: SMART_TV.APPLE_TV
    },
    GOOGLE_TV: {
        REG:  /(large screen)|googletv/i,
        VALUE: SMART_TV.GOOGLE_TV
    },
    PS4: {
        REG: /playstation 4/i,
        VALUE: SMART_TV.PS4
    },
    XBOX_ONE: {
        REG: /xbox one/i,
        VALUE: SMART_TV.XBOX_ONE
    },
    GENERIC_TV: {
        REG: /tv|smarttv|googletv|crkey|Sharp|THOMSON|THOM|Panasonic|Philips|NETTV|Maple_2011|appletv|Humax|Ikea|Loewe|Medion|hbbtv|pov_tv|Airties|netcast.tv|OWB|Grundig|Arcelik/i,
        VALUE: SMART_TV.GENERIC_TV
    }
};

export const REG_GAME_DEVICES = {
    PS4: {
        REG:  /playstation 4/i,
        VALUE: GAME_DEVICES.PS4
    },
    PS3: {
        REG:  /playstation 3/i,
        VALUE: GAME_DEVICES.PS3
    },
    XBOX: {
        REG: /xbox/i,
        VALUE: GAME_DEVICES.XBOX
    },
    XBOX_ONE: {
        REG: /xbox one/i,
        VALUE: GAME_DEVICES.XBOX_ONE
    },
    WII_U: {
        REG: /nintendo wiiu/i,
        VALUE: GAME_DEVICES.WII_U
    },
    WII: {
        REG: /nintendo wii/i,
        VALUE: GAME_DEVICES.WII
    },
    PS_VITA: {
        REG: /playstation vita/i,
        VALUE: GAME_DEVICES.PLAYSTATION_VITA
    },
    NINTENDO_3DS: {
        REG: /nintendo 3ds/i,
        VALUE: GAME_DEVICES.NINTENDO_3DS
    },
    PSP: {
        REG: /psp/i,
        VALUE: GAME_DEVICES.PSP
    }
};

export const REG_IE_VERSIONS = {
    MS_MSIE: {
        REG: /msie/i,
        VALUE: null
    },
    MS_TRIDENT: {
        REG: /trident/i,
        VALUE: null
    },
    MS_EDGE: {
        REG: /edg/i,
        VALUE: null
    }
};

export const REG_BROWSERS = {
    CHROME: {
        REG: /(chrome|crios)\/([\d.]+)/,
        VALUE: BROWSER_NAMES.CHROME
    },
    FIREFOX: {
        REG: /firefox|iceweasel|fxios/i,
        VALUE: BROWSER_NAMES.FIREFOX
    },
    WEB_VIEW: {
        REG: /(iphone|ipod|ipad).*applewebkit(?!.*safari)/,
        VALUE: BROWSER_NAMES.SAFARI
    },
    SAFARI: {
        REG: /version\/([\d.]+)([^s](safari)|[^m]*(mobile)[^S]*(safari))/,
        VALUE: BROWSER_NAMES.SAFARI
    },
    OPERA: {
        REG: /opera|opr|opios/i,
        VALUE: BROWSER_NAMES.OPERA
    },
    IE: {
        REG: /msie|trident|edg/,
        VALUE: BROWSER_NAMES.IE
    },
    SILK: {
        REG: /silk/i,
        VALUE: BROWSER_NAMES.SILK
    },
    YANDEX: {
        REG: /yabrowser/i,
        VALUE: BROWSER_NAMES.YANDEX
    },
    NA: {
        REG: null,
        VALUE: BROWSER_NAMES.NA
    }
};

export const REG_OS = {
    WINDOWS: {
        REG: /win\d{2}|windows/,
        VALUE: OS_SYSTEMS.WINDOWS
    },
    IOS: {
        REG: /(ipod|iphone|ipad)/i,
        VALUE: OS_SYSTEMS.IOS
    },
    MAC_OS: {
        REG: /macintosh/i,
        VALUE: OS_SYSTEMS.MAC_OS
    },
    ANDROID: {
        REG: /android/i,
        VALUE: OS_SYSTEMS.ANDROID
    },
    LINUX: {
        REG:  /linux/i,
        VALUE: OS_SYSTEMS.LINUX
    },
    FIREFOX_OS: {
        REG:  /\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/,
        VALUE: OS_SYSTEMS.FIREFOX_OS
    },
    CHROME_OS: {
        REG:  /cros/,
        VALUE: OS_SYSTEMS.CHROME_OS
    },
    WINDOWS_PHONE: {
        REG:  /windows phone/i,
        VALUE: OS_SYSTEMS.WINDOWS_PHONE
    }
};

export const REG_SORT_NAMES = {
    MOZILLA: {
        REG: /mozilla/,
        VALUE: null
    },
    CHROME: {
        REG: /chrome/,
        VALUE: null
    },
    WEBKIT: {
        REG: /webkit/,
        VALUE: null
    },
    APPLE_WEBKIT: {
        REG: /applewebkit/,
        VALUE: null
    },
    SAFARI: {
        REG: /safari/,
        VALUE: null
    }
};

export const REG_WINDOWS_OS_VERSION = {
    WINDOWS_3_11: {
        REG: /win16/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_95: {
        REG: /(windows 95|win95|windows_95)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_ME: {
        REG: /(win 9x 4.90|windows ME)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_98: {
        REG: /(windows 98|win98)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_CE: {
        REG: /windows ce/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_2000: {
        REG: /(windows nt 5.0|windows 2000)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_XP: {
        REG: /(windows nt 5.1|windows xp)/,
        VALUE: WINDOWS_OS.WINDOWS_XP
    },
    WINDOWS_SERVER_2003: {
        REG: /windows nt 5.2/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_VISTA: {
        REG: /windows nt 6.0|Windows Vista/,
        VALUE: WINDOWS_OS.WINDOWS_VISTA
    },
    WINDOWS_7: {
        REG: /(windows 7|windows nt 6.1)/,
        VALUE: WINDOWS_OS.WINDOWS_7
    },
    WINDOWS_8: {
        REG: /(windows 8|windows 8.1|windows nt 6.2 |windows nt 6.3)/,
        VALUE: WINDOWS_OS.WINDOWS_8
    },
    WINDOWS_10: {
        REG: /(windows nt 10.0)/,
        VALUE: WINDOWS_OS.WINDOWS_10
    },
    WINDOWS_NT_4_0: {
        REG: /(windows nt 4.0|winnt4.0|winnt|windows nt)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
};

export const REG_WINDOWS_PHONE_OS_VERSION = {
    WINDOWS_PHONE_7_5: {
        REG: /(windows phone os 7.5)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_PHONE_8_1: {
        REG: /(windows phone 8.1)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_PHONE_10: {
        REG: /(windows phone 10)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    }
};

export const REG_MAC_OS_VERSION = {
    MAC_OS: ''
};

export const REG_LINUX_OS = {
    DEBIAN: {
        REG: /Debian/i,
        VALUE: LINUX_OS.DEBIAN
    },
    KNOPPIX: {
        REG: /Knoppix/i,
        VALUE: LINUX_OS.KNOPPIX
    },
    MINT: {
        REG: /Mint/i,
        VALUE: LINUX_OS.MINT
    },
    UBUNTU: {
        REG: /Ubuntu/i,
        VALUE: LINUX_OS.UBUNTU
    },
    KUBUNTU: {
        REG: /Kubuntu/i,
        VALUE: LINUX_OS.KUBUNTU
    },
    XUBUNTU: {
        REG: /Xubuntu/i,
        VALUE: LINUX_OS.XUBUNTU
    },
    LUBUNTU: {
        REG: /Lubuntu/i,
        VALUE: LINUX_OS.LUBUNTU
    },
    FEDORA: {
        REG: /Fedora/i,
        VALUE: LINUX_OS.FEDORA
    },
    RED_HAT: {
        REG: /Red Hat/i,
        VALUE: LINUX_OS.RED_HAT
    },
    MANDRIVA: {
        REG: /Mandriva/i,
        VALUE: LINUX_OS.MANDRIVA
    },
    GENTOO: {
        REG: /Gentoo/i,
        VALUE: LINUX_OS.GENTOO
    },
    SABAYON: {
        REG: /Sabayon/i,
        VALUE: LINUX_OS.SABAYON
    },
    SLACKWARE: {
        REG: /Slackware/i,
        VALUE: LINUX_OS.SLACKWARE
    },
    SUSE: {
        REG: /SUSE/i,
        VALUE: LINUX_OS.SUSE
    },
    CENT_OS: {
        REG: /CentOS/i,
        VALUE: LINUX_OS.CENT_OS
    },
    BACKTRACK: {
        REG: /BackTrack/i,
        VALUE: LINUX_OS.BACKTRACK
    }
};

export const REG_BOTS = {
    GENERIC_BOT: {
        REG: /bot|googlebot|crawler|spider|robot|crawling/i,
        VALUE: BOTS.GENERIC_BOT
    }
};
