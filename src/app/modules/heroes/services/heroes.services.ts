import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { createHash, timestamp } from '../../../common/utils/api.utils';

@Injectable()
export class HeroesServices {

    private API_KEY: string = '78faae78756679c05cbdd832c67ed6e0';
    private API_PRIVATE_KEY: string = 'a3d2c718a71e0bde2d144c1f4dc375bb30dc6d52';

    private API_URL: string = 'https://gateway.marvel.com:443/v1/public/characters';

    constructor(private http: Http) {}

    getHeroes() {
        const ts = timestamp();
        const hash = createHash(ts, this.API_KEY, this.API_PRIVATE_KEY);

        return this.http.get(`${this.API_URL}?apiKey=${this.API_KEY}&ts=${ts}&hash=${hash}`);
    }
}
