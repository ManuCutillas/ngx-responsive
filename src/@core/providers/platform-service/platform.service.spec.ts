import { TestBed, inject } from '@angular/core/testing';
import { PlatformService } from './platform.service';
import { PLATFORM_ID } from '@angular/core';
import { ResponsiveConfig } from '../responsive-config/responsive-config';

describe('PlatformService', () => {

    let service: PlatformService;
    let platformId: 'browser' | 'server';
    let responsiveConfig = {
        config: {
            breakPoints: {
                xs: { max: 767 },
                sm: { min: 768, max: 991 },
                md: { min: 992, max: 1199 },
                lg: { min: 1200, max: 1599 },
                xl: { min: 1600 }
            },
            debounceTime: 100,
            renderOnServer: false
        }
    } as ResponsiveConfig
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PlatformService, 
                {provide: PLATFORM_ID, useValue: platformId},
                {provide: ResponsiveConfig, useValue: responsiveConfig}]
        });

        service = TestBed.inject(PlatformService);
    });

    describe('isEnabledForPlatform', () => {
        it('should be enabled if browser but renderOnServer true in config', () => {
            platformId = 'browser';
            responsiveConfig = {
                config: {
                    ...responsiveConfig.config,
                    renderOnServer: true
                }
            };
            service = TestBed.inject(PlatformService);

            expect(service.isEnabledForPlatform()).toBe(true);
        });

        it('should be enabled if NOT browser but renderOnServer true in config', () => {
            platformId = 'server';
            responsiveConfig = {
                config: {
                    ...responsiveConfig.config,
                    renderOnServer: true
                }
            };
            service = TestBed.inject(PlatformService);

            expect(service.isEnabledForPlatform()).toBe(true);
        });

        it('should be enabled if browser and renderOnServer false in config', () => {
            platformId = 'browser';
            responsiveConfig = {
                config: {
                    ...responsiveConfig.config,
                    renderOnServer: false
                }
            };
            service = TestBed.inject(PlatformService);

            expect(service.isEnabledForPlatform()).toBe(true);
        });

        it('should NOT be enabled if NOT browser and renderOnServer false in config', () => {
            platformId = 'server';
            responsiveConfig = {
                config: {
                    ...responsiveConfig.config,
                    renderOnServer: false
                }
            };
            service = TestBed.inject(PlatformService);

            expect(service.isEnabledForPlatform()).toBe(false);
        });
    });
    
});
