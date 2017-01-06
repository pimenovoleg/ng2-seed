import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducer } from './app.reducer';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule.forRoot(),
        ROUTING,

        StoreModule.provideStore(appReducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
