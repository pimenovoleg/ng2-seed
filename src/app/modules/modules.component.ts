import { Component } from '@angular/core';

@Component({
    selector: 'pages',
    template: require('./modules.component.html')
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
