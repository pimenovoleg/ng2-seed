import { Routes } from '@angular/router';


export const ROUTES: Routes = [
  {
    path: 'pages',
    loadChildren: './modules/pages.module#PagesModule'
//    canLoad: [AuthGuard]
  }
];
