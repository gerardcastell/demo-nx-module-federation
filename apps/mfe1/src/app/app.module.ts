import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromAuth from '@demo-nx-module-federation/core/data-access-auth';

@NgModule({
  declarations: [AppComponent, CheckoutComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    StoreDevtoolsModule.instrument({}),
    RouterModule.forChild([
      { path: '', component: AppComponent },
      { path: 'checkout', component: CheckoutComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}
