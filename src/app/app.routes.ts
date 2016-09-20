import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const pagesRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: 'es6-promise!./modules/pages.module#PagesModule'
//    canLoad: [AuthGuard]
  }
];

const appRoutes: Routes = [
  ...pagesRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
