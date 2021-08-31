import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from './config';
import { Namespace } from './data-types';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class NamespaceService {

  url: string;
  token: string;
  header;
  // token: string = localStorage.getItem('token')
  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) { }
  getToken(){
    this.token = localStorage.getItem('token')
  }

  setHeader(){
    this.getToken();
    this.header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  }
  getNamespace(): Observable<Namespace[]>{
    this.url = this.config.apiUrl + 'api/v1/namespace'
    this.setHeader()
    // console.log('header service:',this.token)
    return this.http.get(this.url,{headers: this.header}).pipe(map(
      (res: {Namespaces: Namespace[]}) => res.Namespaces
    ))
  }

  getNamespaceDetail(name: string): Observable<Object>{
    this.url = this.config.apiUrl + 'api/v1/namespace/' + name
    this.setHeader()
    return this.http.get(this.url,{headers: this.header})
  }
}


