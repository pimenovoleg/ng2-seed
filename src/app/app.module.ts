import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';

import { ComponentsModule } from './common/components';

import { HeroesModule } from './modules/heroes/heroes.module';

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

        ComponentsModule,
        HeroesModule,

        StoreModule.provideStore(reducer),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
