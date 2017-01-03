import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as appRoot from '../../../app.reducer';
import { HeroActions } from './ngrx/heroes.actions';


@Component({
    selector: 'heroes',
    template: require('./heroes.component.html')
})
export class HeroesComponent implements OnInit {

    public heroes$: Observable<any>;

    constructor(private store: Store<appRoot.State>) { }

    ngOnInit() {

        // this.heroes$ = this.store.select('heroes');

        // this.store.dispatch(new HeroActions().loadHeroesAction());
    }
}
