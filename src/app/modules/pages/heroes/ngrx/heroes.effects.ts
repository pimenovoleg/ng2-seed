import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as hero from './heroes.actions';

import { HeroesServices } from '../services/heroes.services';

@Injectable()
export class HeroEffects {
    constructor(private actions$: Actions, private heroesService: HeroesServices) {}

    @Effect()
    loadHeroes$ = this.actions$
        .ofType(hero.ACTION_TYPES.LOAD)
        .switchMap(() => this.heroesService.getHeroes())
        .map(heroes => new hero.LoadHeroesCompleteAction(heroes));
}
