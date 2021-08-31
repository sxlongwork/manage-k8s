import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from './config';
import { UserInfo } from './data-types';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class LoginService {

  options
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  getToken(user: UserInfo){
    let url = this.config.apiUrl + 'api/token'
    let params = JSON.stringify(user)

    // let header = new HttpHeaders().set('Content-Type', 'application/json')
    this.options = {
      withCredentials: false,
      responseType: "json"
    }
    // console.log('url:', url)
    // console.log('params:', params)
    return this.http.post(url, params, this.options)
  }


}
