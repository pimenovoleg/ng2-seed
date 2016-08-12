import { Component, ViewEncapsulation } from '@angular/core';

import { Card } from '../../common/components';

import { HoverTable } from './components/hoverTable';
import { ChartJSComponent } from './components/chartjs';

@Component({
    selector: 'basic-tables',
    encapsulation: ViewEncapsulation.None,
    directives: [Card, HoverTable, ChartJSComponent],
    styles: [require('./dashboard.scss')],
    template: require('./dashboard.tpl.html')
})
export class DashBoard {

    constructor() {
    }
}
