/**
 * @name user-agent.interfaces
 * @description Core user agent interfaces in ngx-responsive
 *
 * @license MIT
 */

/**
 * @export IUserAgent
 */
export interface IUserAgent {
    device: string;
    browser: string;
    pixelratio: string;
    ie_version: {
        name: string;
        state: boolean;
    };
    game_device: {
        name: string;
        state: boolean;
    };
    smart_tv: {
        name: string;
        state: boolean;
    };
    desktop: {
        name: string;
        state: boolean;
    };
    tablet: {
        name: string;
        state: boolean;
    };
    mobile: {
        name: string;
        state: boolean;
    };
    window_os: {
        name: string;
        state: boolean;
    };
    linux_os: {
        name: string;
        state: boolean;
    };
    bot: boolean;
}
