import { NgModule } from '@angular/core';

import { DashBoardComponent } from './dashboard.component';

// import { CardComponent, CHART_DIRECTIVES } from '../../common/components';

@NgModule({
    bootstrap: [DashBoardComponent],
    declarations: [
      DashBoardComponent,
     // CardComponent
    ],
    imports: [
    ]
})
export class DashBoardModule {}
