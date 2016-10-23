import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InteralStateType } from './app.service';

import { AppComponent } from './app.component';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {}
