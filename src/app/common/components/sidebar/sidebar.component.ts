import { Component, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'grc-sidebar',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./sidebar.scss')],
    template: require('./sidebar.tpl.html')
})
export class SidebarComponent {

    public menuItems: Array<any>;
    public isMenuCollapsed: boolean = false;

    public ngOnInit(): void {

    }

}
