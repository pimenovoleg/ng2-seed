import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { HeroActions } from './heroes.actions';
import { HeroesServices } from '../services/heroes.services';

@Injectable()
export class HeroEffects {

    constructor(private actions$: Actions, private heroesService: HeroesServices) {}

    @Effect()
    loadHeroes$ = this.actions$
        .ofType(HeroActions.LOAD)
        .switchMap(() => this.heroesService.getHeroes())
        .map(heroes => new HeroActions().loadHeroesCompleteAction(heroes));
}
