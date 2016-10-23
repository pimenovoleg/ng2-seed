import { Injectable } from '@angular/core';
import { Http, Request, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const HEADERS = new Headers({'Content-Type': 'application/json'});

@Injectable()
export class CRUDService {
    private BASE_URL = '/api';

    constructor(private _http: Http) {

    }

    public post(path, data) {
        return this._http.post(this.BASE_URL + path, JSON.stringify(data), {headers: HEADERS})
        .map((res: Response) => res.json());
    }

    public get(path) {
        return this._http.get(this.BASE_URL + path)
        .map((res: Response) => res.json());
    }
}
