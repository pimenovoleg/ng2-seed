import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';

import { reducer } from './app.reducer';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        ROUTING,

        StoreModule.provideStore(reducer),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
