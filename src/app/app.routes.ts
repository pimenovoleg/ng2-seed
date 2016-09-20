import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './modules/pages.component';
//import { DashBoard } from './modules/dashboard';

export const ROUTES: Routes = [
    { path: '', component: PagesComponent },
    { path: 'home',  component: PagesComponent },
    // { path: 'pages', component: Pages,
    //     children: [
    //       { path: 'dashboard', component: DashBoard }
    //     ]
    // }
];

