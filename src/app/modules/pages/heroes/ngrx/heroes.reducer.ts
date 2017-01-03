import { ActionReducer, Action } from '@ngrx/store';

import { Hero } from '../models/Hero';

import { HeroActions } from './heroes.actions';


export interface State {
    ids: string[];
    entities: { [id: string]: Hero };
}

const initialState: State = {
    ids: [],
    entities: {}
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case HeroActions.LOAD_COMPLETE: {

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
