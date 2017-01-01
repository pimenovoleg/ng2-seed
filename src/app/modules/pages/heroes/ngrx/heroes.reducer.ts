import { Hero } from '../models/Hero';

import * as hero from './heroes.actions';

export interface State {
    ids: string[];
    entities: { [id: string]: Hero };
}

const initialState: State = {
    ids: [],
    entities: {}
};

export function reducer(state = initialState, action: hero.actions): State {
    switch (action.type) {
        case hero.ACTION_TYPES.LOAD_COMPLETE: {

            return {
                ids: [ ...state.ids],
                entities: Object.assign({}, state.entities)
            };
        }

        default: {
            return state;
        }
    }
}
