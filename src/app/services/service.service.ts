import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from './config';
import { Service } from './data-types';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class ServiceService {

  token: string;
  httpHeader;
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig,
  ) { }

  getToken() {
    this.token = localStorage.getItem('token')
  }

  setHeader() {
    this.getToken();
    this.httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  }

  getServiceList(namespace?: string): Observable<Service[]> {
    this.setHeader()
    let url = this.config.apiUrl + 'api/v1/service/' + namespace
    return this.http.get(url, { headers: this.httpHeader }).pipe(map(
      (res: { services: Service[] }) => res.services
    ))
  }

  getServiceDetail(namespace: string, name: string) {
    this.setHeader()
    let url = this.config.apiUrl + 'api/v1/service/' + namespace + '/' + name
    return this.http.get(url, { headers: this.httpHeader })
  }


}
