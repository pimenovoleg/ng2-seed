import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    encapsulation: ViewEncapsulation.None, // set global styles
    styles: [ require('./app.main.scss') ]
})
export class AppComponent { }
