import { ModuleWithProviders }  from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  {
    path: 'pages',
    loadChildren: 'es6-promise!./modules/pages.module#PagesModule'
//    canLoad: [AuthGuard]
  }
];
