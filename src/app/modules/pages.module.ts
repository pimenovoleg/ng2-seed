import { NgModule } from '@angular/core';

// import { DashBoardModule } from './dashboard/dashboard.module';

import { PagesComponent } from './pages.component';
// import { SidebarComponent } from '../common/components';
// import { HeaderComponent } from '../common/components';

// import { pagesRouting } from './pages.routes';

@NgModule({
//     imports: [
// //      DashBoardModule,
// //      pagesRouting
//     ],
    declarations: [
      PagesComponent,
      // SidebarComponent,
      // HeaderComponent
    ]
})
export class PagesModule {}
