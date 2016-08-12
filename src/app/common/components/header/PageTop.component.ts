import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'gr-page-top',
    styles: [require('./pageTop.scss')],
    template: require('./pageTop.html'),
    encapsulation: ViewEncapsulation.None
})
export class PageTop {
    constructor () {
    }
}
