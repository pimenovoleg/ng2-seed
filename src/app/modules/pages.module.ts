import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashBoardModule } from './dashboard/dashboard.module';

import { PagesComponent } from './pages.component';
import { SidebarComponent } from '../common/components';
import { HeaderComponent } from '../common/components';

import { pagesRouting } from './pages.routes';

@NgModule({
    declarations: [
      PagesComponent,
      SidebarComponent,
      HeaderComponent
    ],
    imports: [
        DashBoardModule,
        pagesRouting
    ]
})
export class PagesModule {}
