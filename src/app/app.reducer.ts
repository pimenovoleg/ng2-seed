import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';

import * as fromHeroes from './modules/pages/heroes/ngrx/heroes.reducer';

export interface State {
    heroes: fromHeroes.State;
}

const reducers = {
    heroes: fromHeroes.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {

    return productionReducer(state, action);
}
