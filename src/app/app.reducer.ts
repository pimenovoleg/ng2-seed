import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';

import * as heroes from './modules/pages/heroes/ngrx/heroes.reducer';

export interface State {
    heroes: heroes.State;
}

const reducers = {
    heroes: heroes.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {

    return productionReducer(state, action);
}
