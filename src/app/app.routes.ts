import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, NoPreloading }  from '@angular/router';

const ROUTES: Routes = [
    {
        path: '',
        loadChildren: './modules/pages.module#PagesModule?chunkName=PagesModule'
    }
];

const ROUTER_CONFIG = { useHash: true, preloadingStrategy: NoPreloading };

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, ROUTER_CONFIG);

