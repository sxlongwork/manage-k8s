import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from '../app-routing.module';
import { IconsProviderModule } from '../icons-provider.module';
import { PagesModule } from '../pages/pages.module';
import { APP_CONFIG, TEST_CONFIG } from '../services/config';
import { MyHttpInterceptor } from '../services/myhttp-interceptor';
import { ServicesModule } from '../services/services.module';
import { ShareModule } from '../share/share.module';
registerLocaleData(zh);



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: APP_CONFIG, useValue: TEST_CONFIG},
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor,multi: true }
  ],
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 只能被appModule引入');
    }
  }
 }
