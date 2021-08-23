import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
