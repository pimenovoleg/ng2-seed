import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

import { HeroesServices } from './services/heroes.services';
import { HeroEffects } from './ngrx/heroes.effects';

import { HeroesComponent } from './heroes.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        HeroesComponent
    ],
    imports: [
        BrowserModule,
        EffectsModule.run(HeroEffects)
    ],
    providers: [
        HeroesServices
    ],
    exports: [
        HeroesComponent
    ]
})
export class HeroesModule {}
