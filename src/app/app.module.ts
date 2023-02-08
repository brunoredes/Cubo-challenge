import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServiceComponent } from './components/service/service.component';
import { CoreModule } from './core/core.module';
import { CachePolicyInterceptor } from './core/interceptors/cache-policy.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CarouselComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CachePolicyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
