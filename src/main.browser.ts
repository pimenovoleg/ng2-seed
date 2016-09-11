import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationRef } from '@angular/core';

import { decorateModuleRef } from './app/environment';

/*
* App Component
* our top level component that holds all of our components
*/
import { AppModule } from './app';

export function main(initialHmrStatte?: any): Promise<any> {
    return platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .then(decorateModuleRef)
        .catch(err => console.error(err));
}

function bootloader(main) {
  if (document.readyState === 'complete') {
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
}

bootloader(main);
