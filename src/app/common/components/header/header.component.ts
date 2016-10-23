import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'grc-header',
    styles: [require('./header.scss')],
    template: require('./header.html'),
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {}
