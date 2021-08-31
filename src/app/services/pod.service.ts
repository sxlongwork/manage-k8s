import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from './config';
import { Pod } from './data-types';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class PodService {

  token: string;
  header
  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) { }

  getToken() {
    this.token = localStorage.getItem('token')
  }

  setHeader(){
    this.getToken();
    this.header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  }

  getPodList(namespace?: string): Observable<Pod[]> {
    let url = this.config.apiUrl + 'api/v1/pod/' + namespace
    // let token = localStorage.getItem('token')
    this.setHeader()
    return this.http.get(url, { headers: this.header }).pipe(map(
      (res: { pods: Pod[] }) => res.pods
    ))
  }

  getPodDetail(namespace: string, podName: string) {
    let url = this.config.apiUrl + 'api/v1/pod/' + namespace + '/' + podName
    this.setHeader()
    return this.http.get(url, { headers: this.header })
  }

  getPodContainers(namespace: string, podName: string): Observable<Container[]> {
    let url = this.config.apiUrl + 'api/v1/pod/' + namespace + '/' + podName + '/' + 'container'
    this.setHeader()
    return this.http.get(url, { headers: this.header }).pipe(map(
      (res: { containers: Container[] }) => res.containers
    ))
  }

}
