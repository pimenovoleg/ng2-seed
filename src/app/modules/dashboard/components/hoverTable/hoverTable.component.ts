import { Component } from '@angular/core';

import { HoverTablesService } from './hoverTable.service';

@Component({
    selector: 'hover-table',
    template: require('./hoverTable.html'),
    providers: [HoverTablesService]
})
export class HoverTable {

    metricsTableData: Array<any>;

    constructor(private _hoverTablesService: HoverTablesService) {
        this.metricsTableData = _hoverTablesService.metricsTableData;
    }
}
