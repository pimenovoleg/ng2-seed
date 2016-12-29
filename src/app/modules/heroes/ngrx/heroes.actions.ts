import { Action } from '@ngrx/store';

import { type } from '../../../common/utils/ngrx.utils';
import { Hero } from '../models/Hero';


export const ACTION_TYPES = {
    LOAD:             type('[Hero] Load'),
    LOAD_COMPLETE:    type('[Hero] Load Complete'),
    SELECT:           type('[Hero] Select')
};

export class LoadHeroesAction implements Action {
    type = ACTION_TYPES.LOAD;

    constructor() { }
}

export class LoadHeroesCompleteAction implements Action {
    type = ACTION_TYPES.LOAD_COMPLETE;

    constructor(public payload: any) { }
}

export type actions
    = LoadHeroesAction
    | LoadHeroesCompleteAction;
