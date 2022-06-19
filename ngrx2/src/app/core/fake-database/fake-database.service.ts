import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FakeDatabase implements InMemoryDbService {
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        return {
            developers: [
                {
                    id: 1,
                    name: 'Steven',
                    team: 'Goldfish'
                }
            ],
            products: [
                {
                    id: 1,
                    name: 'Laptop',
                    price: 1200
                }
            ]
        }
    }
}
