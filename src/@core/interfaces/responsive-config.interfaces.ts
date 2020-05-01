/**
 * @name responsive-config.interfaces
 * @description Core responsive-config interface in ngx-responsive
 *
 * @license MIT
 */
export interface IResponsiveConfig {
    breakPoints: {
        xs: { max: number },
        sm: { min: number, max: number },
        md: { min: number, max: number },
        lg: { min: number, max: number },
        xl: { min: number }
    };
    debounceTime: number;
    renderOnServer?: boolean;
}
