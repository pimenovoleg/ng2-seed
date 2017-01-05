
import { Hero } from '../models/Hero';

import * as hero from '../ngrx/heroes.actions';

export interface State {
    ids: string[];
    entities: { [id: string]: Hero };
}

const initialState: State = {
    ids: [],
    entities: {}
};

export function reducer(state = initialState, action: hero.Actions): State {
    switch (action.type) {
        case hero.ActionTypes.LOAD_COMPLETE: {

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
