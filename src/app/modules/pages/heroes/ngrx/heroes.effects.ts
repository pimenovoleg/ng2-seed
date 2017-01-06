import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as hero from './heroes.actions';
import { HeroesServices } from '../services/heroes.services';

@Injectable()
export class HeroEffects {

    constructor(private actions$: Actions, private heroesService: HeroesServices) {}

    @Effect()
    loadHeroes$: Observable<Action> = this.actions$
        .ofType(hero.ActionTypes.LOADING)
        .debounceTime(300)
        .switchMap(() => {
            return this.heroesService.getHeroes()
                .map((heroes) => {
                    return new hero.LoadCompleteAction(heroes);
                });
        });
}
