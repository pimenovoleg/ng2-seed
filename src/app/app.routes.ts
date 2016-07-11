import { RouterConfig } from '@angular/router';

import { Pages } from './modules';
import { DashBoard } from './modules/dashboard';

export const routes: RouterConfig = [
    {
        path: '',
        component: Pages
    },
    {
        path: 'pages',
        component: Pages,
        children: [
            {
                path: 'dashboard',
                component: DashBoard
            }
        ]
    }
];

