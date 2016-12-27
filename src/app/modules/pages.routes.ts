import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { PagesComponent } from './pages.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
