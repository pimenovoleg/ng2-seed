import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as hero from './ngrx/heroes.actions';

@Component({
    selector: 'heroes',
    template: require('./heroes.component.html')
})
export class HeroesComponent implements OnInit {

    public heroes$: Observable<any>;

    constructor(private store: Store<fromRoot.State>) { }

    ngOnInit() {
        // this.heroes$ = this.store.select('heroes');

        this.store.dispatch(new hero.LoadingAction(true));
    }
}
