import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styles: [require('normalize.css'), require('./app.scss')],
    template: require('./app.tpl.html')
})
export class AppComponent { }
