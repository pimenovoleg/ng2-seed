import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

@Injectable()
export class HeroActions {
    static LOAD =          '[Hero] Load ';
    static LOAD_COMPLETE = '[Hero] Load Complete';

    loadHeroesAction(): Action {
        return {
            type: HeroActions.LOAD,
            payload: 'run'
        };
    }

    loadHeroesCompleteAction(data): Action {
        return {
            type: HeroActions.LOAD_COMPLETE,
            payload: data
        };
    }
}
