import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

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
        ComponentsModule
    ]
})
export class PagesModule {}
