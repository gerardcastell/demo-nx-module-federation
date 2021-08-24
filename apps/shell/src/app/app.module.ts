import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromAuth from '@demo-nx-module-federation/core/data-access-auth';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    StoreDevtoolsModule.instrument({}),
    RouterModule.forRoot([
      {
        path: 'mfe1',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'mfe1',
            exposedModule: './Module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
          }).then((m) => m.AppModule),
      },
      {
        path: 'mfe2',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'mfe2',
            exposedModule: './Module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
          }).then((m) => m.AppModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
