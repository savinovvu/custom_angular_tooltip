import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export const REST_URL = new InjectionToken('REST_URL');

@Injectable()
export class RestDataSourceService {

  constructor(private httpClient: HttpClient, @Inject(REST_URL) private url: string) {
  }

  getPriceList(): Observable<any> {
    return this.httpClient.get(`${this.url}pricelist`);
  }


}
