import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig  {
    apiUrl: string,
}

export const TEST_CONFIG: AppConfig = {
    apiUrl: "http://47.104.236.217:8088/"
}