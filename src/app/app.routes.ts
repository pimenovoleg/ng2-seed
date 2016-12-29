import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { HeroesComponent } from './modules/heroes/heroes.component';


const ROUTES: Routes = [
    {
        path: '',
        // loadChildren: './modules/heroes/heroes.module#HeroesModule?chunkName=HeroesModule'
        component: HeroesComponent
    }
];

const ROUTER_CONFIG = { useHash: true };

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, ROUTER_CONFIG);

