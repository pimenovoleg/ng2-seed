import { Hero } from '../models/Hero';

import * as hero from '../ngrx/heroes.actions';
import { createReducer, AppState } from '../../../../app.reducer';

export interface HeroesState {
    ids: string[];
    entities: { [id: string]: Hero };
}

const initialState: HeroesState = {
    ids: [],
    entities: {}
};

export function reducer(state = initialState, action: hero.Actions): HeroesState {
    switch (action.type) {
        case hero.ActionTypes.LOAD_COMPLETE: {

            const heroes = action.payload.results;

            return Object.assign({}, state, {
                ids: [ ...state.ids],
                entities: Object.assign({}, state.entities)
            });
        }

        default: {
            return state;
        }
    }
}

export interface AppStateWithHeroes extends AppState {
    heroes: HeroesState;
}

export const appReducerWithHeroes = createReducer({ heroes: reducer });

