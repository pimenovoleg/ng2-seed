import { Component, Input } from '@angular/core';

@Component({
    selector: 'pt-sidenav',
    styleUrls: [ './sidebar.scss' ],
    templateUrl: './sidebar.tpl.html'
})
export class SidenavComponent {
    @Input()
    public open = false;
}
