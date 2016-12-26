import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: NoPreloading })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
