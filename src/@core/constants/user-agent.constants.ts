/**
 * @name user-agent.constants
 * @description Core user agent in ngx-responsive
 *
 * @license MIT
 */
import { IUserAgent } from "../interfaces";

export const USER_AGENT: IUserAgent = {
    device: null,
    browser: null,
    pixelRatio: null,
    ie_version: {
        name: null,
        state: null
    },
    game_device: {
        name: null,
        state: null
    },
    smart_tv: {
        name: null,
        state: null
    },
    desktop: {
        name: null,
        state: null
    },
    tablet: {
        name: null,
        state: null
    },
    mobile: {
        name: null,
        state: null
    },
    window_os: {
        name: null,
        state: null
    },
    linux_os: {
        name: null,
        state: null
    },
    bot: null
};
