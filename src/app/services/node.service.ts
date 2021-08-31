import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from './config';
import { NodeInfo } from './data-types';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class NodeService {

  nodes: NodeInfo[];
  token: string;
  header;
  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: HttpClient,
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

  getNodeList(): Observable<NodeInfo[]> {
    const url = this.config.apiUrl + 'api/v1/node';
    this.setHeader()
    return this.http.get(url, { headers: this.header }).pipe(map(
      (res: { nodes: NodeInfo[] }) => res.nodes
    ))
  }

  getNodeDetail(name: string): Observable<Object> {
    this.setHeader()
    const url = this.config.apiUrl + 'api/v1/node/' + name;
    return this.http.get(url, { headers: this.header })
  }


}


