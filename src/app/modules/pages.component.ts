import { Component, ViewEncapsulation } from '@angular/core';

import { Sidebar, PageTop } from '../common/components';

@Component({
    selector: 'pages',
    encapsulation: ViewEncapsulation.None,
    styles: [],
    directives: [Sidebar, PageTop],
    template: require('./pages.tpl.html')
})
export class Pages {
  constructor() {}
}
