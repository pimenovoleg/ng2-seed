import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as appRoot from '../../app.reducer';
import * as hero from './ngrx/heroes.actions';
import {Observable} from "rxjs";

@Component({
    selector: 'heroes',
    template: require('./heroes.tpl.html')
})
export class HeroesComponent implements OnInit {

    public heroes$: Observable<any>;

    constructor(private store: Store<appRoot.State>) { }

    ngOnInit() {

        this.heroes$ = this.store.select('heroes');

        this.store.dispatch(new hero.LoadHeroesAction());
    }
}
