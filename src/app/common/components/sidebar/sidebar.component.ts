import { Component, Input } from '@angular/core';

@Component({
    selector: 'mc-sidenav',
    styles: [require('./sidebar.scss')],
    template: require('./sidebar.tpl.html')
})
export class SidenavComponent {
    @Input() open = false;
}
