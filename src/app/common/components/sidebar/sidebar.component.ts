import { Component, Input } from '@angular/core';

@Component({
    selector: 'pt-sidenav',
    styles: [require('./sidebar.scss')],
    template: require('./sidebar.tpl.html')
})
export class SidenavComponent {
    @Input()
    public open = false;
}
