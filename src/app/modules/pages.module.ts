import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class PagesModule {}
