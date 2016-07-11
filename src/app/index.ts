export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';

export const APP_PROVIDERS = [
    AppState
];
