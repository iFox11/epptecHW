import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {PricingComponent} from './components/pricing/pricing.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IncludeJwtInterceptor} from "./shared/include-jwt/include-jwt.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    PricingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: IncludeJwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
