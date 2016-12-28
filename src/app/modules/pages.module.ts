import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';

import { reducer } from './pages.reducer';


import { ComponentsModule } from '../common/components';

import { PagesComponent } from './pages.component';
import { ROUTING } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent
    ],
    imports: [
        MaterialModule.forRoot(),
        ROUTING,
        ComponentsModule,

        StoreModule.provideStore(reducer),
    ]
})
export class PagesModule {}
