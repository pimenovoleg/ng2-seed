import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashBoardComponent } from './dashboard/dashboard.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
       {
        path: '',
        children: [
          { path: 'dashboard', component: DashBoardComponent }
        ]
      }
    ]
  }
];


export const pagesRouting: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
