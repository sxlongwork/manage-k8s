import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from './config';
import { Deployment } from './data-types';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class DeploymentService {

  token: string;
  headers;
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  getToken() {
    this.token = localStorage.getItem('token')
  }

  setHeader() {
    this.getToken();
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
  }

  getDeploymentList(namespace?: string): Observable<Deployment[]> {
    this.setHeader();
    let url = this.config.apiUrl + 'api/v1/deployment/' + namespace;
    return this.http.get(url, { headers: this.headers }).pipe(map(
      (res: { Deploys: Deployment[] }) => res.Deploys
    ))
  }

  getDeploymentDetail(namespace: string, name: string) {
    this.setHeader();
    let url = this.config.apiUrl + 'api/v1/deployment/' + namespace + '/' + name
    return this.http.get(url, { headers: this.headers })
  }

}
