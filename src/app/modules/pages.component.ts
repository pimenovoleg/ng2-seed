import { Component } from '@angular/core';

@Component({
    selector: 'app-pages',
    template: require('./pages.tpl.html')
})
export class PagesComponent {
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
