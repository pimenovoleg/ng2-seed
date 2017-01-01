import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

const ROUTES: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', loadChildren: './modules/modules.module#PagesModule?chunkName=Modules' }
];

const ROUTER_CONFIG = { useHash: true };

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, ROUTER_CONFIG);

