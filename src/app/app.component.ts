import { Component } from '@angular/core';

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
