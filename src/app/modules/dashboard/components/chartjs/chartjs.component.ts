import { Component, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';

import { Card, CHART_DIRECTIVES } from '../../../../common/components';

import { ChartJsService } from './chartjs.service';

@Component({
    selector: 'chart-line',
    providers: [ChartJsService],
    //directives: [Card, CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: require('./chartjs.html')
})
export class ChartJSComponent {

    public lineChartData: Array<any> = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    public lineChartLabels: Array<any> = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July'
    ];
    public lineChartType: string = 'line';

    data: any;

    constructor() {
    }

    ngOnInit() {

    }

    getResponsive(padding, offset) {

    }
}

