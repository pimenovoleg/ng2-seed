import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'basic-tables',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./dashboard.scss')],
    template: require('./dashboard.tpl.html')
})
export class DashBoardComponent {}
