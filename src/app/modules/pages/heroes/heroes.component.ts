import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as hero from './ngrx/heroes.actions';
import { AppStateWithHeroes, appReducerWithHeroes } from './ngrx/heroes.reducer';

@Component({
    selector: 'heroes',
    template: require('./heroes.component.html')
})
export class HeroesComponent implements OnInit {

    public heroes$: Observable<any>;

    constructor(private store: Store<AppStateWithHeroes>) {
        store.replaceReducer(appReducerWithHeroes);
    }

    ngOnInit() {
        // this.heroes$ = this.store.select('heroes');

        this.store.dispatch(new hero.LoadingAction(true));
    }
}
