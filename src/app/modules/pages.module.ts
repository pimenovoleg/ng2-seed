import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { SidebarComponent } from '../common/components';
import { HeaderComponent } from '../common/components';

@NgModule({
    bootstrap: [PagesComponent],
    declarations: [
      PagesComponent,
      SidebarComponent,
      HeaderComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class PagesModule {}
