import { Component } from '@angular/core';

import './app.main.scss';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [],
})
export class AppComponent {
    showSidenav$: boolean;

    constructor() {
        this.showSidenav$ = false;
    }

    closeSidenav() {
        this.showSidenav$ = false;
    }

    openSidenav() {
        this.showSidenav$ = true;
    }
}
