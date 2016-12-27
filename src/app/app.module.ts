import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, NoPreloading } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { ComponentsModule } from './common/components';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: NoPreloading }),
        MaterialModule.forRoot(),
        ComponentsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
