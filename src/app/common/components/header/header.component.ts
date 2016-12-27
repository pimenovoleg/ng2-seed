import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mc-header',
    template: require('./header.html')
})
export class HeaderComponent {
    @Output() openMenu = new EventEmitter();
}
