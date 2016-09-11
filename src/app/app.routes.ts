import { Routes, RouterModule } from '@angular/router';

import { Pages } from './modules';
import { DashBoard } from './modules/dashboard';

export const ROUTES: Routes = [
    { path: '', component: Pages },
    { path: 'pages', component: Pages,
        children: [
          { path: 'dashboard', component: DashBoard }
        ]
    }
];

